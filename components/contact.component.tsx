import { motion } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  const saveContact = () => {

  }

  return (
    <Fade cascade damping={0.1}>
      <div className="flex flex-col items-center xl:flex-row gap-10 min-h-custom2 px-3 py-20 md:py-3 md:px-24  md:mb-1">
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
                <a className="font-bold text-mainColor" href="/pdf/brochure.pdf" target={"_blank"}>
                  Brochure de Wisefleet
                </a>{" "}
                e infórmate en detalle sobre la solución.
              </p>
            </div>
          </article>

          <form className="">
            <h4 className="font-extrabold text-mainColor text-3xl md:text-4xl my-6">Contactate con nosotros</h4>
            <label className="ms-3 uppercase  text-black text-sm font-extrabold">Nombre completo </label>
            <input  className="mt-1 p-3 text-mainColor focus:outline-none bg-gray-100 placeholder:text-mainColor w-full" placeholder="Nombres y Apellidos"/>

            <div className="w-full flex flex-col md:flex-row gap-3 mt-3">
              <div className="flex-1">
                  <label className="ms-3 uppercase text-black text-sm font-extrabold">Correo electrónico </label>
                  <input className="mt-1 p-3 text-mainColor focus:outline-none bg-gray-100 placeholder:text-mainColor w-full" placeholder="Ejemplo@speedworks.cl"/>
              </div>
              <div className="flex-1">
                  <label className="ms-3 uppercase text-black text-sm font-extrabold">Teléfono</label>
                  <input className="mt-1 p-3 text-mainColor focus:outline-none bg-gray-100 placeholder:text-mainColor w-full" placeholder="+51 9 3530121"/>
              </div>
            </div>
            <div className="mt-3">
              <label className="ms-3 uppercase text-black text-sm font-extrabold ">Mensaje</label>
              <textarea className="mt-1 p-3 text-mainColor focus:outline-none bg-gray-100 placeholder:text-mainColor w-full" placeholder="Escribe aquí tu mensaje"/>
            </div>
            <div className="w-full flex justify-center">
              <button onClick={saveContact} className="mt-8  uppercase  hover:bg-hoverColor hover:border-transparent transition w-full bg-mainColor border-white border-2 text-lg rounded-xl md:w-80 flex items-center justify-center gap-3 px-8 py-2">
                <span className="spacing-l">Enviar</span>
              </button>
            </div>
          </form>
        </motion.aside>
      </div>
    </Fade>
  );
}
