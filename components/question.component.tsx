import { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

interface Props {
    question: string,
    answer: string
}

export default function Question({question, answer} : Props) {
  const [active, setActive] = useState(false);
  const handleState = () => {
    setActive((current) => !current);
  };

  return (
    <motion.article 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0, scale: 0.5 }}
    className="border border-gray-100 border-solid shadow-lg p-6 rounded-lg w-full md:w-3/4">
      <div className="flex gap-6 cursor-pointer" onClick={handleState}>
        {active ? (
          <Image
            src={"/icon-line.svg"}
            width={25}
            height={25}
            alt="plus"
          />
        ) : (
          <Image
            src={"/icon-plus.svg"}
            width={25}
            height={25}
            alt="plus"
          />
        )}
        <h4
          className={`font-bold text-xl  ${
            active ? "text-mainColor" : "text-gray-600"
          }`}
          
        >
            {question}
        </h4>
      </div>

      <div 
        className={`gap-6 ${active ? "h-fit flex" : "h-0 hidden"}`}
        >
          <Image
            src={"/icon-line.svg"}
            width={25}
            height={25}
            alt="plus"
            className="opacity-0"
          />
          <p className="text-black">
            <br />
            {answer}
          </p>
      </div>
    </motion.article>
  );
}
