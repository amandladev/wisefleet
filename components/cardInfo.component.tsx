import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardType } from "@/types/card.type";

interface Props {
  card: CardType;
}
export default function CardInfo({ card }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="relative hidden md:block"
      onMouseLeave={() => setHover(false)}
    >
      <Image
        alt="image"
        width={400}
        height={300}
        src={card.image}
        onMouseEnter={() => setHover(true)}
      />
      <div
        className={`slide-translate-y transition text-center px-6 py-8 light-background absolute w-full top-0 left-0 flex flex-col gap-3 ${
          hover ? "over-height slide-translate-y-active" : ""
        }`}
      >
        <h4 className="font-extrabold text-mainColor text-lg 2xl:text-2xl h-16">
          {card.title}
        </h4>
        <p className={`text-gray-600 text-xs 2xl:text-base ${hover ? "h-20" : "slide-opacity "}`}>
          {card.description}
        </p>

        <p
          className={`uppercase text-right roboto text-mainColor text-sm 2xl:text-base mt-3 2xl:mt-10 ${
            hover ? "" : "slide-opacity "
          }`}
        >
          Mas informacion {"->"}
        </p>
      </div>
    </motion.div>
  );
}
