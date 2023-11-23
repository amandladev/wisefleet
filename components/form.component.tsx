import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Departments, shipmentTypeArr } from "@/utils/constants.util";
// import Fade from 'react-reveal/Fade';
import { Fade } from "react-awesome-reveal";
import {
  handleNumberInput,
  handleState,
  handleStringInput,
} from "@/utils/handleStages.util";
import { validateClientData } from "@/utils/validation.utils";
import { alerts } from "./alert.component";

interface Props {
  openPayment: (client: any, deliveryPrice: number) => void;
  product: any;
}

export default function Form({ openPayment, product }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [type, setType] = useState("0");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [reference, setReference] = useState("");
  const [district, setDistrict] = useState("");
  const [department, setDepartment] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const handleDepartment = (event: any) => {
    const departmentId = event.target.value;
    setDepartment(departmentId);
    if (departmentId == "Lima") {
      setDeliveryPrice(10);
    } else {
      setDeliveryPrice(15);
    }
  };

  const payment = () => {

    const client = {
      address: {
        city: department,
        line3: district,
        postal_code: postalCode,
        line1: address,
        line2: reference,
        state: department,
        country_code: "PE",
      },
      email,
      lastname,
      name,
      phone,
    };

    const validData = validateClientData(client)

    if (!validData) {
      alerts.fire({
        icon:'warning',
        title: 'Error',
        text: 'Completa todos los campos antes de continuar'
      })
      return 
    }
    openPayment(client, deliveryPrice);
  };

  const addressHasContent = address.length > 0;
  const phoneHasContent = phone.length > 0;
  const referenceHasContent = reference.length > 0;
  const districtHasContent = district.length > 0;
  const postalCodeHasContent = postalCode.length > 0;
  const nameHasContent = name.length > 0;
  const lastnameHasContent = lastname.length > 0;
  const emailHasContent = email.length > 0;
  const departmentHasContent = department.length > 0;

  return (
    <Fade cascade damping={0.1}>
      <main className="flex relative flex-col-reverse md:flex-row">
        <form
          className="text-black bg-white py-6 px-8 md:px-20 2xl:px-40 md:w-1/2 w-full border-r border-t border-gray-200"
          id="payment-form"
        >
          <div className="flex flex-col gap-3 my-3">
            <label className="font-bold text-3xl text-black">Contacto</label>

            <div className="relative">
              <input
                type="email"
                placeholder="Correo electrónico"
                className={`${
                  emailHasContent ? "text-md px-3 pb-1 pt-5" : "p-3"
                } text-black w-full transition-all border-gray-300 rounded border-2 outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-mainColor focus:border-transparent`}
                value={email}
                onChange={(e) => handleState(setEmail, e.target.value)}
              />
              {emailHasContent && (
                <label className="absolute text-sm top-1 left-3 text-gray-400">
                  Correo electrónico
                </label>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 my-6">
            <label className="font-bold text-3xl text-black">Entrega</label>
            <div>
              {shipmentTypeArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`p-3 cursor-pointer text-black flex items-center gap-3 border ring-1 ring-inset ring-gray-300 ${
                      type == item.id && " ring-mainColor"
                    } ${
                      index != 0
                        ? "rounded-bl-md rounded-br-md"
                        : "rounded-tl-md rounded-tr-md"
                    }`}
                    onClick={() => handleState(setType, item.id)}
                  >
                    <input
                      type="checkbox"
                      className="cursor-pointer text-black"
                      id={item.id}
                      value={item.id}
                      onChange={() => handleState(setType, item.id)}
                      checked={type == item.id}
                    />
                    <label className="text-black">{item.name}</label>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-3 mt-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => handleStringInput(setName, e)}
                  className={`${
                    nameHasContent ? "text-md px-3 pb-1 pt-5" : "p-3"
                  } text-black w-full transition-all border-gray-300 rounded border outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-mainColor focus:border-transparent`}
                />
                {nameHasContent && (
                  <label className="absolute text-sm top-1 left-3 text-gray-400">
                    Nombre
                  </label>
                )}
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Apellido"
                  value={lastname}
                  onChange={(e) => handleStringInput(setLastname, e)}
                  className={`${
                    lastnameHasContent ? "text-md px-3 pb-1 pt-5" : "p-3"
                  } text-black w-full transition-all border-gray-300 rounded border outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-mainColor focus:border-transparent`}
                />
                {lastnameHasContent && (
                  <label className="absolute text-sm top-1 left-3 text-gray-400">
                    Apellido
                  </label>
                )}
              </div>
            </div>
            <div className="relative">
              <select
                className={`${
                  departmentHasContent ? "text-md px-3 pb-1 pt-5" : "p-3"
                } w-full bg-white text-black border-gray-300 ring-1 ring-inset ring-gray-300 rounded border`}
                value={department}
                onChange={handleDepartment}
              >
                <option value="" className="">
                  Seleccionar departamento
                </option>
                {Departments.map(
                  ({ id: departmentId, name: departmentName }) => {
                    return (
                      <option key={departmentId} value={departmentName}>
                        {departmentName}
                      </option>
                    );
                  }
                )}
              </select>
              {departmentHasContent && (
                <label className="absolute text-sm top-1 left-3 text-gray-400">
                  Departamento
                </label>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Dirección"
                value={address}
                onChange={(e) => handleStringInput(setAddress, e)}
                className={`${
                  addressHasContent ? "text-md px-3 pb-1 pt-5" : "p-3"
                } text-black transition-all border-gray-300  rounded border w-full outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-mainColor focus:border-transparent`}
              />
              {addressHasContent && (
                <label className="absolute text-sm top-1 left-3 text-gray-400">
                  Dirección
                </label>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Referencia"
                value={reference}
                onChange={(e) => handleStringInput(setReference, e)}
                className={`${
                  referenceHasContent ? "text-md px-3 pb-1 pt-5" : "p-3"
                } text-black transition-all border-gray-300 rounded border w-full outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-mainColor focus:border-transparent`}
              />
              {referenceHasContent && (
                <label className="absolute text-sm top-1 left-3 text-gray-400">
                  Referencia
                </label>
              )}
            </div>

            <div className="flex gap-3  w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Código postal"
                  value={postalCode}
                  onChange={(e) => handleStringInput(setPostalCode, e)}
                  className={`${
                    postalCodeHasContent ? "text-md px-3 pb-1 pt-5" : "p-3"
                  } text-black w-full transition-all border-gray-300 rounded border outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-mainColor focus:border-transparent`}
                />
                {postalCodeHasContent && (
                  <label className="absolute text-sm top-1 left-3 text-gray-400">
                    Código postal
                  </label>
                )}
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Distrito"
                  value={district}
                  onChange={(e) => handleStringInput(setDistrict, e)}
                  className={`${
                    districtHasContent ? "text-md px-3 pb-1 pt-5" : "p-3"
                  } text-black w-full transition-all border-gray-300 rounded border  outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-mainColor focus:border-transparent`}
                />
                {districtHasContent && (
                  <label className="absolute text-sm top-1 left-3 text-gray-400">
                    Distrito
                  </label>
                )}
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Celular"
                value={phone}
                onChange={(e) => handleNumberInput(setPhone, e)}
                className={`${
                  phoneHasContent ? "text-md px-3 pb-1 pt-5" : "p-3"
                } text-black transition-all border-gray-300 w-full rounded border flex-1 outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-mainColor`}
              />
              {phoneHasContent && (
                <label className="absolute text-sm top-1 left-3 text-gray-400">
                  Celular
                </label>
              )}
            </div>
            <div className="flex flex-col gap-3 my-3">
              <p className="font-bold text-3xl text-black">Envíos</p>
              <div className="flex justify-between bg-activeFooter border-mainColor border p-3 rounded">
                <p className="text-black">
                  {!department
                    ? "---"
                    : department == "Lima"
                    ? "Lima"
                    : "Provincias"}{" "}
                </p>

                <p className="text-black">S/ {deliveryPrice}.00</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-3xl text-black">Pago</h3>
              <p className="text-gray-500">
                Todas las transacciones son seguras y están encriptadas.
              </p>
              <div>
                <div className="flex justify-between bg-activeFooter text-black border-mainColor border p-3 rounded">
                  <p className="text-black">Openpay | Paga como quieras</p>

                  <div className="flex gap-2">
                    <Image
                      src={"/icons/visa.svg"}
                      width={38}
                      height={24}
                      alt="visa"
                    />
                    <Image
                      src={"/icons/master.svg"}
                      width={38}
                      height={24}
                      alt="master card"
                    />
                    <Image
                      src={"/icons/amex.svg"}
                      width={38}
                      height={24}
                      alt="amex"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center py-6 border-gray-200 border-2 bg-bgCheckout">
                  <div className="w-1/3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-252.3 356.1 163 80.9"
                      className="eHdoK"
                    >
                      <path
                        fill="none"
                        stroke="black"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"
                      ></path>
                      <circle
                        cx="-227.8"
                        cy="361.9"
                        r="1.8"
                        fill="black"
                      ></circle>
                      <circle
                        cx="-222.2"
                        cy="361.9"
                        r="1.8"
                        fill="black"
                      ></circle>
                      <circle
                        cx="-216.6"
                        cy="361.9"
                        r="1.8"
                        fill="black"
                      ></circle>
                      <path
                        fill="none"
                        stroke="black"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"
                      ></path>
                    </svg>
                  </div>
                  <p className="max-w-sm text-center text-black">
                    Luego de hacer clic en “Pagar ahora”, se abrira un formulario de
                    OpenPay | Paga como quieras para completar tu compra de
                    forma segura.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={payment}
                className="bg-mainColor text-white py-3 rounded mt-4 transition hover:bg-hoverColor"
              >
                Pagar ahora
              </button>
            </div>
          </div>
        </form>
        <aside className="md:w-1/2 w-full 2xl:px-8 px-0 bg-bgCheckout border-t border-gray-200">
          {product.image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex justify-center flex-col gap-8 py-3 2xl:py-6 2xl:px-20  my-0 2xl:my-3 "
            >
              <div className="relative">
                <Image
                  className="rounded"
                  width={800}
                  height={500}
                  src={`/products/${product.image}`}
                  alt={product.name}
                />
                {/* <Image
                  className="rounded absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  width={800}
                  height={500}
                  src={`/products/description.jpg`}
                  alt={product.name}
                /> */}
              </div>
              <div className="flex justify-between items-center mt-12">
                <div className="flex gap-3">
                  <div className="">
                    <h4 className="text-mainColor text-3xl font-extrabold">
                      {product.name}
                    </h4>
                    <p className="text-gray-500 text-sm">Autoinstalable</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xl font-extrabold">
                  S/ {product.price}.00
                </p>
              </div>

              <div className=" bg-mainColor p-3 rounded">
                <div className="flex justify-between">
                  <p className="text-sm">Subtotal</p>
                  <p className="text-sm ">S/ {product.price}.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Envíos</p>
                  <p className="text-sm">S/ {deliveryPrice}.00</p>
                </div>
                <div className="flex justify-between mt-6">
                  <div>
                    <p className="text-xl">Total</p>
                    <p className="text-gray-100 text-md">
                      Incluye S/{" "}
                      {((product.price + deliveryPrice) * 0.18).toFixed(2)} de
                      impuestos
                    </p>
                  </div>
                  <p className="text-xl">
                    S/ {product.price + deliveryPrice}.00
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </aside>
      </main>
    </Fade>
  );
}
