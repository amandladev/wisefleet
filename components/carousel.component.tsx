import React, { useState } from "react";
import { motion } from "framer-motion";
import CarouselButton from "./carouselButton.component";
import Button from "./button.component";
import Link from "next/link";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      title: "Monitorea tus vehículos",
      content: "Con un plan que se adapta",
      content2: "al tamaño de su flota",
      img: "banner/banner1.jpg",
      mobile_img: "banner/banner1-mobile.jpg",
    },
    {
      id: 1,
      title: "Tu Flota segura 24x7",
      content: "El tamaño de tu flota no importa",
      img: "banner/banner2.png",
      mobile_img: "banner/banner2-mobile.png",
    },
    {
      id: 2,
      title: "App para la gestión y control de tu flota",
      content: "Cumple con los estándares de reportería logística que solicitan los mandantes",
      img: "banner/banner3.png",
      mobile_img: "banner/banner3-mobile.png",
    },
    {
      id: 3,
      title: "Monitorea tus vehículos",
      content: "",
      img: "banner/banner4.png",
      mobile_img: "banner/banner4-mobile.png",
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
    <>
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
                  <strong className="font-bold"> {slide.content2 ?? ""}</strong>
                </p>
                <Link href={'/products'}>
                  <Button isDefault={false} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </article>

      <CarouselButton slideManager={prevSlide} direction="left" image="/arrow2.svg" size={30}/>
      <CarouselButton slideManager={nextSlide} direction="right" image="/arrow.svg" size={30}/>
    </>
  );
}
