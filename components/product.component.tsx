import { useState } from "react";
import { useRouter } from "next/router";

import { ProductType } from "@/types/product.type";
import CarouselButton from "./carouselButton.component";
import Button from "./button.component";

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
                    <header className="text-center">
                        <span className="font-light text-xl">
                            {product.type} 
                        </span>
                        <h2 className="text-4xl">{product.title}</h2>
                        <small className="text-sm h-6">{product.description ?? ""}</small>
                    </header>
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

                    <div className="md:w-80">
                      <Button  isDefault={true} isProduct={true}/>
                    </div>
                </article>

                <article className={`md:flex flex-col items-center rounded-lg hidden bg-mainColor p-12`}>
                    <header className="text-center">
                        <span className="font-light text-xl">
                            {product.type} 
                        </span>
                        <h2 className="text-4xl">{product.title}</h2>
                        <small className="text-sm h-6">{product.description ?? ""}</small>
                    </header>
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
                      <Button isDefault={true}  />
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
