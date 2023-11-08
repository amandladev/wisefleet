import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { handleStringInput } from "@/utils/handleStages.util";
import axios from "axios";
import { alerts } from "./alert.component";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
  
  const saveContact = async () => {
    setLoading(true)
    try {
      const {status} = await axios.post('/api/email/contact', { fullName, email, phone, message })
      if (status) {
        alerts.fire({
          title: 'Contacto guardado',
          text: 'En breve nos pondremos en contacto',
          icon: 'success'
        })
      }
    } catch (e) {
      console.error(e)
      alerts.fire({
        title: 'Hubo un error',
        text: 'Intente más tarde',
        icon: 'error'
      })
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col bg-white items-center xl:flex-row gap-10 min-h-custom2 px-3 py-20 md:py-3 md:px-24  md:mb-1">
        <Fade cascade damping={0.1}>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="flex-1 mb-6">
          <Image
            width={800}
            height={600}
            alt="contact image"
            src={"/camion.png"}
          />
        </motion.div>
        </Fade>
        <Fade cascade damping={0.1}>
        <motion.aside 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="px-8 flex-1">
          <article className="">
            <h4 className="text-mainColor font-extrabold text-3xl md:text-4xl">Descubre más sobre Wisefleet</h4>
            <div className="flex items-center gap-3 mt-6 mb-10">
              <a className="" href="/pdf/brochure.pdf" target={"_blank"}>
                  <Image src={"/pdf.svg"} width={50} height={50} alt="download Brochure" />
              </a>
              <p className="text-black font-light max-w-sm ">
                {" "}
                Descarga aquí el{" "}
                <a href="/pdf/brochure.pdf" target={"_blank"}>
                  <strong className="font-bold text-mainColor">Brochure de Wisefleet</strong>
                </a>{" "}
                e infórmate en detalle sobre la solución.
              </p>
            </div>
          </article>

          <form className="">
            <h4 className="font-extrabold text-mainColor text-3xl md:text-4xl my-6">Contactate con nosotros</h4>
            <label className="ms-3 uppercase  text-black text-sm font-extrabold">Nombre completo </label>
            <input onChange={(e) => handleStringInput(setFullName, e)} className="mt-1 p-3 text-mainColor focus:outline-none bg-gray-100 placeholder:text-mainColor w-full" placeholder="Nombres y Apellidos"/>

            <div className="w-full flex flex-col md:flex-row gap-3 mt-3">
              <div className="flex-1">
                  <label className="ms-3 uppercase text-black text-sm font-extrabold">Correo electrónico </label>
                  <input onChange={(e) => handleStringInput(setEmail, e)} className="mt-1 p-3 text-mainColor focus:outline-none bg-gray-100 placeholder:text-mainColor w-full" type="email" placeholder="Ejemplo@speedworks.cl"/>
              </div>
              <div className="flex-1"> 
                  <label className="ms-3 uppercase text-black text-sm font-extrabold">Teléfono</label>
                  <input onChange={(e) => handleStringInput(setPhone, e)} className="mt-1 p-3 text-mainColor focus:outline-none bg-gray-100 placeholder:text-mainColor w-full" type="tel" placeholder="51 93530121"/>
              </div>
            </div>
            <div className="mt-3">
              <label className="ms-3 uppercase text-black text-sm font-extrabold ">Mensaje</label>
              <textarea onChange={(e) => handleStringInput(setMessage, e)} className="mt-1 p-3 text-mainColor focus:outline-none bg-gray-100 placeholder:text-mainColor w-full" placeholder="Escribe aquí tu mensaje"/>
            </div>
            <div className="w-full flex justify-center">
              <button type="button" onClick={saveContact} className={`${loading && 'pointer-events-none'} mt-8 uppercase hover:bg-hoverColor hover:border-transparent transition w-full bg-mainColor border-white border-2 text-lg rounded-xl md:w-80 flex items-center justify-center gap-3 px-8 py-2 `}>
                <span className="spacing-l">{loading ? 'Cargando...' : 'Enviar'}</span>
              </button>
            </div>
          </form>
        </motion.aside>
        </Fade>
      </div>
  );
}
