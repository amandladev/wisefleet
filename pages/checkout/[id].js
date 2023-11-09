import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Navbar from "@/components/navbar.component";
import Form from "@/components/form.component";
import { alerts } from "@/components/alert.component";
import { handleState } from "@/utils/handleStages.util";
import { validatePaymentData } from "@/utils/validation.utils";
import { EnviameModel } from "@/services/enviame.service";

export default function Checkout() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [product, setProduct] = useState({});
  const [deviceId, setDeviceId] = useState(null);
  const [client, setClient] = useState({})
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState(null);
  const [cardHolder, setCardHolder] = useState(null);
  const [handelCard, setHandelCard] = useState(true);
  const [cvv, setCvv] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((current) => !current);
  };
  const { product: productQuery } = router.query;

  const onError = (err) => {
    console.error(err)
    setLoading(false);
    alerts.fire({
      icon: 'error',
      title: 'Hubo un error',
      text: 'Parece que los datos ingresados no son válidos',
      confirmButtonText: 'Cerrar'
    })
  }

  const validNumberCard = (value) => {
    if (cardNumber && cardNumber.length > 18) {
      return;
    }
    setCardNumber(value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '))
  }

  const onSuccess = async ({data, status}) => {
    const { id, card } = data
    const { name, lastname, phone, email } = client
    const { data : dataFromDataBase} = await axios.get('/api/order/getLastCode')

    const body = {
      "source_id": id,
      "method": "card",
      "amount": product.price,
      "currency": "PEN",
      "description": "Cargo inicial a mi cuenta",
      "order_id" : dataFromDataBase.code,
      "device_session_id": deviceId ?? 'n0ff3r0NZoXaxNYqDRCQ65Lna6Q1eid0',
      "customer": {
        "name" : name,
        "last_name" : lastname,
        "phone_number" : phone,
        "email" : email
      }
    }

    let response = null
    try {
      response = await axios.post('/api/openpay/createCharge', body)
    } catch (err) {
      console.error(err)
      alerts.fire({
        icon: 'error',
        title: 'Hubo un error',
        // timer: 2000,
        text: 'No se pudo procesar su pago',
        confirmButtonText: 'Cerrar'
      }).then(() =>  
        router.reload()
      )
    }
    if (response && status === 200) {
      body.address = client.address.line1
      body.city = client.address.city
      await axios.post('/api/order/createOrder', body)
      await EnviameModel.sendData(client, product.price, dataFromDataBase.code.toString())
      // await sendDataToEnviame(dataFromDataBase.code)
      const dataForEmail = {
        product,
        deliveryPrice,
        client,
        orderId: dataFromDataBase.code
      }
      await axios.post('/api/email/send', dataForEmail) 
      router.push(`/success`)
    } else {
      alerts.fire({
        icon: 'error',
        title: 'Hubo un error',
        // timer: 2000,
        text: 'No se pudo procesar su pago',
        confirmButtonText: 'Cerrar'
      }).then(() =>  
        router.reload()
      )
    }
  }

  const sendPayToOpenPay = async () => {
    setLoading(true);
    const clientInfo = {
      card_number: cardNumber.replace(/\s/g, ''),
      holder_name: cardHolder,
      expiration_year: year.slice(-2),
      expiration_month: month,
      cvv2: cvv,
      address: {
        city: client.address.city,
        line3: client.address.line3,
        postal_code: client.address.postal_code,
        line1: client.address.line1,
        line2: client.address.line2,
        state: client.address.state,
        country_code: "PE",
      }
    }
    const validData = validatePaymentData(clientInfo)

    if (!validData) {
      alerts.fire({
        icon:'warning',
        title: 'Error',
        text: 'Completa todos los campos antes de continuar'
      })
      setLoading(false);
      return 
    }
 
    const { data } = await axios.get('/api/openpay/getCredentials');

    OpenPay.setId(data.appId);
    OpenPay.setApiKey(data.publicKey);

    OpenPay.setSandboxMode(true);
    OpenPay.getSandboxMode();

    const deviceDataId  = OpenPay.deviceData.setup("payment-form");
    console.log({deviceDataId})
    setDeviceId(deviceDataId)
    
    OpenPay.token.create(clientInfo, onSuccess, onError); 
  }

  const openPayment = (client = null, deliveryPrice= null) => {
    if (client) setClient(client)
    if (deliveryPrice) setDeliveryPrice(deliveryPrice)
    setPaymentModal(current => !current)
  }

  useEffect(() => {
    if (productQuery && typeof productQuery === "string") {
      setProduct(JSON.parse(productQuery));
    }
  }, [productQuery, setProduct]);

  return (
    <>
      <Script
          type="text/javascript"
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
        />
      <Script
        type="text/javascript"
        src="https://js.openpay.pe/openpay.v1.min.js"
      />
      <Script
        type="text/javascript"
        src="https://js.openpay.pe/openpay-data.v1.min.js"
      />
      <Head>
        <title>Wisefleet - Checkout</title>
        <meta name="description" content="Soluciones para transportistas" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar openNavbar={toggleNavbar} isOpen={isOpen} mainPage={false} />
      <Form openPayment={openPayment} product={product}/>
      {
        paymentModal &&
        <>
          <div className="z-30 fixed bottom-0 bg-transparencyPayment h-full w-full cursor-pointer" onClick={openPayment}></div>
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed z-40 bottom-0 mb-36 left-0 right-0 custom-max m-auto">
            <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white ">
              <header className="flex flex-col justify-center items-center ">
                {handelCard ? (
                  <div 
                  className="relative transition ease-out duration-300">
                    <Image src={'/images/card-visa-front.png'} alt="" height={400} width={400}/>
                    <div className="bg-transparent text-lg w-full text-white px-5  absolute left-0 bottom-12">
                      <p className="mb-4 sm:text-lg px-6">
                        {cardNumber.length > 0 ? cardNumber : "0000 0000 0000 0000"}
                      </p>
                      <div className="flex flex-row justify-between px-6 sm:text-lg">
                        <p>{cardHolder ?? "José Pérez"}</p>
                        <div className="">
                          <span>{month}</span>
                          <span>{month && year && '/'}</span>
                          <span>{year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="relative">
                    <Image src={'/images/card-visa-back.png'} alt="" height={400} width={400}/>
                    <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12">
                      <div className="border border-white w-20 h-12 flex justify-center items-center">
                        <p className="text-sm ml-3">{cvv.length > 0 ? cvv : 'CVV'}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                <ul className="flex">
                  <li className="mx-2">
                    <img
                      className="w-16"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                      alt=""
                    />
                  </li>
                  <li className="mx-2">
                    <img
                      className="w-14"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                      alt=""
                    />
                  </li>
                  <li className="ml-5">
                    <img
                      className="w-7"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                      alt=""
                    />
                  </li>
                </ul>
              </header>
              <main className="mt-4 p-4">
                {/* <h1 className="text-xl font-semibold text-gray-700 text-center">
                  Card payment
                </h1> */}
                <div className="">
                  <div className="my-3">
                    <label htmlFor="" className="ml-3 text-gray-700">
                      Nombre del titular
                    </label>
                    <input
                      type="text"
                      className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:ring-mainColor focus:outline-none"
                      placeholder="José Pérez"
                      max-length="22"
                      onChange={(e) => handleState(setCardHolder, e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="" className="ml-3 text-gray-700">
                      Número de tarjeta
                    </label>
                    <input
                      type="text"
                      className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:ring-mainColor focus:outline-none"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      max-length="19"
                      onChange={(e) => validNumberCard(e.target.value)}
                    />
                  </div>
                  <div className="my-3 flex flex-col">
                    <div className="mb-2">
                      <label htmlFor="" className="text-gray-700">
                        Fecha de expiración
                      </label>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <select
                        name=""
                        id=""
                        className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:ring-mainColor focus:outline-none"
                        onChange={(e) => handleState(setMonth, e.target.value)}
                      >
                        <option value="" disabled>
                          MM
                        </option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        onChange={(e) => handleState(setYear, e.target.value)}
                        name=""
                        id=""
                        className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:ring-mainColor focus:outline-none"
                      >
                        <option value="" disabled>
                          YY
                        </option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                      </select>
                      <input
                        type="text"
                        className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:ring-mainColor focus:outline-none"
                        placeholder="CVV"
                        max-length="3"
                        onChange={(e) => handleState(setCvv, e.target.value)}
                        onFocus={() => setHandelCard(false)}
                        onBlur={() => setHandelCard(true)}
                      />
                    </div>
                  </div>
                </div>
              </main>
              <footer className="mt-6 p-4">
                <button onClick={sendPayToOpenPay} className={`${loading && 'pointer-events-none'} submit-button px-4 py-3 rounded bg-mainColor text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors`}>
                  {loading ? 
                  'Cargando ...'  
                  : `Pagar S/ ${product.price + deliveryPrice}.00`}
                </button>
              </footer>
            </div>
          </motion.div>
        </>
      }
    </>
  );
}
