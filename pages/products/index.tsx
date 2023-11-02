import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Footer from "@/components/footer.component";
import Navbar from "@/components/navbar.component";
import { fetchData } from "@/utils/fetch.util";
import { ProductType } from "@/types/product.type";

export default function Products() {
  const router = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen((current) => !current);
  };

  const openCheckout = (product: ProductType) => {
    router.push({
        pathname: `/checkout/${product.id}`,
        query: { product: JSON.stringify(product) },
      });
  };

  useEffect(() => {
    fetchData("/json/products.json", setProducts);
  }, []);

  return (
    <>
      <Head>
        <title>Wisefleet - Comprar</title>
        <meta name="description" content="Soluciones para transportistas" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar openNavbar={toggleNavbar} isOpen={isOpen} mainPage={false} />

      <main className="relative">
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <section key={index} className="px-2 md:px-24 py-0 md:py-10">
                <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1, scale: 0.9 }}
                 transition={{ duration: 0.5 }}
                 exit={{ opacity: 0, scale: 0.5 }}
                className="flex gap-20 justify-center flex-col md:flex-row">
                  <Image
                    src={`/products/${product.image}`}
                    height={900}
                    width={700}
                    alt="producto"
                  />

                  <div className="text-black flex flex-col gap-3">
                    <div>
                      <p className="italic text-xs text-gray-600 text-right">{product.type}</p>
                      <h1 className="text-5xl font-extrabold roboto">
                          <span className="text-2xl"></span> {product.title}
                      </h1>
                    </div> 
                    <p className="text-lg text-gray-600">Costo: <span className="text-black text-2xl font-extrabold">S/ {product.price}</span></p>

                    <p className="font-light">
                      Impuesto incluido. Los{" "}
                      <Link href={"/"} className="underline transition hover:text-gray-600">
                        gastos de envio
                      </Link>{" "}
                      se calculan en la pantalla de pago.
                    </p>
                    {/* <Link href={`/checkout/${product.id}`}> */}
                      <button
                        onClick={() => openCheckout(product)}
                        className="w-full bg-black text-white py-3 transition hover:-translate-y-1"
                      >
                        Comprar
                      </button>
                    {/* </Link> */}

                    <p className="text-gray-600 text-lg">Incluye:</p>

                    <ul className="text-gray-600 list-disc px-4 text-lg">
                      {
                        product.features.map((feature, indexFeature) => {
                            return (
                                <li key={indexFeature}>{feature}</li>
                            )
                        })
                      }
                    </ul>

                    <p className="font-light max-w-xl text-gray-500">
                      Importante: Este Kit será instalado por un{" "}
                      <span className="font-bold">
                        Técnico Certificado Wisecity
                      </span>
                      . Una vez realizada tu compra, te enviaremos un email para
                      que selecciones el día y hora para coordinar la
                      instalación.
                    </p>
                  </div>
                </motion.div>
              </section>
            );
          })}
      </main>

      <Footer />
    </>
  );
}
