import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      title: "Monitorea tus vehículos",
      content: "Con un plan que se adapta",
      content2: "al tamaño de su flota",
      img: "banner1.jpg",
      mobile_img: "banner1-mobile.jpg",
    },
    {
      id: 1,
      title: "Monitorea tus vehículos",
      content: "Contenido de la diapositiva 2",
      img: "banner2.png",
      mobile_img: "banner2-mobile.png",
    },
    {
      id: 2,
      title: "Monitorea tus vehículos",
      content: "Contenido de la diapositiva 2",
      img: "banner3.png",
      mobile_img: "banner3-mobile.png",
    },
    {
      id: 3,
      title: "Monitorea tus vehículos",
      content: "Contenido de la diapositiva 2",
      img: "banner4.png",
      mobile_img: "banner4-mobile.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="relative">
      <article className="carousel overflow-hidden relative">
        <div className="carousel-inner flex  transition-transform duration-300 bg-black">
          {slides.map((slide) => (
            <motion.div
              key={slide.id}
              className={`carousel-slide flex-shrink-0 transition w-full min-h-custom bg-transparent relative ${
                slide.id === currentSlide ? "nextHeroImage" : "hidden"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{
                backgroundImage: `url(/${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                className="md:hidden w-full h-full object-cover"
                src={`/${slide.mobile_img}`}
                alt={`Mobile Image`}
              />
              <div className="absolute bottom-20 md:bottom-40 w-full flex flex-col items-center justify-center gap-6">
                <h1 className="w-1/2 md:w-full text-5xl md:text-8xl font-extrabold roboto text-center">
                  {slide.title}
                </h1>

                <p className="w-1/2 md:w-full text-2xl md:text-5xl font-light text-center min-h-subtitle">
                  {slide.content}
                  <span className="font-bold"> {slide.content2 ?? ""}</span>
                </p>

                <button className="uppercase hover:bg-mainColor hover:border-transparent transition bg-transparency border-white border-2 text-lg rounded-xl w-80 flex items-center justify-center gap-3 px-8 py-2">
                  <span className="spacing-l">obtén aquí</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </article>

      <button
        onClick={prevSlide}
        className="carousel-prev border-solid border-2 border-white absolute 
        left-3 md:left-20 bottom-72 md:bottom-1/2 transform -translate-y-1/2 transition 
        hover:bg-mainTransparency hover:border-transparent bg-gray-500 text-white 
        md:p-2 p-1 ml-0 md:ml-3 rounded-full"
      >
        <Image width={30} height={30} alt="prev slide" src={"/flecha3.svg"} />
      </button>
      <button
        onClick={nextSlide}
        className="carousel-next border-solid border-2 border-white absolute 
        right-3 md:right-20 bottom-72 md:bottom-1/2  transform -translate-y-1/2 transition 
        hover:bg-mainTransparency hover:border-transparent bg-gray-500 text-white 
        md:p-2 p-1 mr-0 md:mr-3 rounded-full"
      >
        <Image width={30} height={30} alt="prev slide" src={"/arrow.svg"} />
      </button>
    </section>
  );
}
