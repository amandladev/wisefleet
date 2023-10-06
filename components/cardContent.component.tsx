import Image from "next/image"
import { useState } from "react"
import { motion } from 'framer-motion'

import { CardType } from "@/types/card.type"

interface Props {
    cards: CardType[]
}
export default function CardContent ({cards} : Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hover, setHover] = useState(false)
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === cards.length - 1 ? 0 : prevSlide + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? cards.length - 1 : prevSlide - 1
      );
    };
    return (
      <div className="flex flex-col md:flex-row gap-4 px-3 md:px-24  items-center relative">
           {
              cards.map((card, index) => {
                return (
                  <>
                    <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="relative hidden md:block"  onMouseLeave={() => setHover(false)}>
                      <Image alt="image" width={400} height={300} src={card.image} onMouseEnter={() => setHover(true)}/>
                      <div className={`slide-translate-y transition text-center px-6 py-8 light-background absolute w-full top-0 left-0 flex flex-col gap-3 ${hover ? 'over-height slide-translate-y-active' : ''}`}>
                        <h4 className="font-extrabold text-mainColor text-2xl h-16" >
                          {card.title}
                        </h4>
                        <p className={`text-gray-600  ${hover ? 'h-20' : 'slide-opacity '}`}>
                          {card.description}
                        </p>
            
                        <p className={`uppercase text-right roboto text-mainColor mt-10 ${hover ? '' : 'slide-opacity '}`}>
                          Mas informacion {"->"}
                        </p>
                      </div>
                    </motion.div>
                    <div 
                    className={`relative md:hidden flex flex-col items-center ${card.id === currentSlide ? '' : 'hidden'}`}>
                      <Image alt="image" width={400} height={300} src={card.image}/>
                      <div className="transition text-center px-6 md:py-8 py-3 light-background -translate-y-3 w-full flex flex-col gap-3">
                        <h4 className="font-extrabold text-mainColor text-3xl h-16" >
                          {card.title}
                        </h4>
                        <p className="text-gray-600">
                          {card.description}
                        </p>

                        <p className="uppercase text-right roboto text-mainColor my-3 md:my-10">
                          Mas informacion {"->"}
                        </p>
                      </div>
                    </div>
                  </>
                )
              })
            }
        <button
          onClick={prevSlide}
          className="carousel-prev border-solid border-2 border-white absolute 
          left-3 top-40 transform -translate-y-1/2 transition 
          hover:bg-mainTransparency hover:border-transparent bg-gray-500 text-white 
          p-1 ml-0 md:ml-3 rounded-full"
        >
          <Image width={30} height={30} alt="prev slide" src={"/flecha3.svg"} />
        </button>
        <button
          onClick={nextSlide}
          className="carousel-next border-solid border-2 border-white absolute 
          right-3 top-40  transform -translate-y-1/2 transition 
          hover:bg-mainTransparency hover:border-transparent bg-gray-500 text-white 
          p-1 mr-0 rounded-full"
        >
          <Image width={30} height={30} alt="prev slide" src={"/arrow.svg"} />
        </button>
      </div>
      )
}