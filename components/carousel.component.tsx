import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CarouselButton from "./carouselButton.component";
import Button from "./button.component";
import { SlidesType } from "@/utils/slide.util";

interface Props {
  slides: SlidesType
}
export default function Carousel({ slides }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);


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
                <h1 className="w-4/5 md:w-full text-5xl md:text-8xl font-extrabold roboto text-center text-shadow">
                  {slide.title}
                </h1>

                <p className="w-2/3 md:w-full text-2xl md:text-5xl font-light text-center min-h-subtitle text-shadow">
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
