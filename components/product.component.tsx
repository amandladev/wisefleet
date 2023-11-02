import { useState } from "react";

import { ProductType } from "@/types/product.type";
import CarouselButton from "./carouselButton.component";
import Button from "./button.component";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  products: ProductType[];
}

export default function Products({ products }: Props) {
  const router = useRouter()
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent((prevSlide) =>
      prevSlide === products.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prev = () => {
    setCurrent((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    );
  };

  const openCheckout = (product: ProductType) => {
    router.push({
        pathname: `/checkout/${product.id}`,
        query: { product: JSON.stringify(product) },
      });
  };

  return (
    <div className="px-6 relative z-10 py-10 xl:py-3 block md:flex justify-center gap-6">
      {products.map((product, index) => {
        return (
            <div key={index}>
                <article
                    className={`md:hidden rounded-lg bg-mainColor flex flex-col items-center py-12 gap-4 relative ${
                    product.id === current ? "" : "hidden"
                    }`}
                >
                    <div className="text-center">
                        <div className="font-light text-xl">
                            {product.type} 
                        </div>
                        <h2 className="text-4xl">{product.title}</h2>
                        <h4 className="text-sm h-6">{product.description ?? ""}</h4>
                    </div>
                    <div>
                    {product.features.map((feature, index2) => {
                        return (
                        <div key={index2} className="flex gap-3 items-center">
                            <div className="w-3 h-3 bg-white rounded-full"> </div>
                            <p>{feature}</p>
                        </div>
                        );
                    })}
                    </div>

                    <div className="w-80">
                      <Button  isDefault={true} isProduct={true}/>
                    </div>
                </article>

                <article className={`md:flex flex-col items-center rounded-lg hidden bg-mainColor p-12`}>
                    <div className="text-center">
                        <div className="font-light text-xl">
                            {product.type} 
                        </div>
                        <h2 className="text-4xl">{product.title}</h2>
                        <h4 className="text-sm h-6">{product.description ?? ""}</h4>
                    </div>
                    <div>
                    {product.features.map((feature, index2) => {
                        return (
                        <div key={index2} className="flex gap-3 items-center">
                            <div className="w-3 h-3 bg-white rounded-full"> </div>
                            <p>{feature}</p>
                        </div>
                        );
                    })}
                    </div>
                    <div onClick={() => openCheckout(product)}>
                      <Button isDefault={true} isProduct={true} />
                    </div>
                </article>
            </div>
        );
      })}
      <CarouselButton slideManager={prev} image="arrow2.svg" direction="left" middle={true} onlyMobile={true}/>
      <CarouselButton slideManager={next} image="arrow.svg" direction="right" middle={true} onlyMobile={true}/>
    </div>
  );
}
