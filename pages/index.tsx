import Navbar from "@/components/navbar.component";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

import Carousel from "@/components/carousel.component";
import Contact from "@/components/contact.component";
import Question from "@/components/question.component";
import CardContent from "@/components/cardContent.component";
import Products from "@/components/product.component";
import Button from "@/components/button.component";

import { QuestionType } from "@/types/question.type";
import { CardType } from "@/types/card.type";
import { ProductType } from "@/types/product.type";
import Footer from "@/components/footer.component";
import { fetchData } from "@/utils/fetch.util";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [contentCards, setContentCards] = useState<CardType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const toggleNavbar = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    fetchData("/json/questions.json", setQuestions);
    fetchData("/json/content-cards.json", setContentCards);
    fetchData("/json/products.json", setProducts);
  }, []);

  return (
    <>
      <Head>
        <title>Wisefleet</title>
        <meta name="description" content="Soluciones para transportistas" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="relative" id="start">
        <Navbar openNavbar={toggleNavbar} isOpen={isOpen} />

        <section className="relative">
          <Carousel />
        </section>

        <section className="flex flex-col md:flex-row gap-3 min-h-screen pt-3 mb-12 md:mb-0 px-3 md:px-24 custom-background">
          <Fade cascade damping={0.1}>
            <div className="flex-1 order-2 md:order-1 md:px-3 px-8">
              <Image
                width={1000}
                height={800}
                src={"/img-descubre.png"}
                alt="wisefleet"
              />
            </div>
          </Fade>

          <div className="order-1 md:order-2 block md:hidden">
            <div className="w-full flex justify-center">
              <Image
                width={300}
                height={100}
                src={"/img-texto-descubre.png"}
                alt="wiseflee gat"
              />
            </div>
          </div>
          <div className="order-last flex-1 px-6 md:px-0 pt-0 pb-10 md:pb-0 md:pt-10 mt-0 md:mt-8">
            <div className="w-full hidden md:flex">
              <Image
                width={400}
                height={100}
                src={"/img-texto-descubre.png"}
                alt="wiseflee gat"
              />
            </div>

            <p className="text-gray-600 text-2xl max-custom-width mt-0 md:mt-16">
              Revolucionaria solución sin contrato paras las empresas de
              transporte que requieren cumplir con la información que les
              solicitan los mandantes y al mismo tiempo controlar de manera
              simple sus vehículos.
            </p>
            <p className="text-gray-600 text-2xl mt-8 max-custom-width">
              Consta de un{" "}
              <span className="font-bold text-hoverColor">
                dispositivo autoinstalable, plataforma y una aplicación
              </span>{" "}
              apta para cualquier telefono.
            </p>
            <Link href={"/products"}>
              <Button isDefault={true} />
            </Link>
          </div>
        </section>
        <section
          className="min-h-screen image-background pt-10 relative"
          id="plans"
        >
          <Fade cascade damping={0.1}>
            <div className="text-center my-12">
              <h1 className="text-6xl md:text-7xl roboto font-bold">
                Elige el plan
              </h1>
              <h4 className="text-3xl md:text-4xl roboto font-bold mt-3">
                que se acomode mejor a tu negocio
              </h4>
            </div>
          </Fade>
          <Fade cascade damping={0.1}>
            <Products products={products} />
          </Fade>
        </section>
        <section
          className="min-h-custom2 bg-white pt-20 relative"
          id="benefits"
        >
          <Fade cascade damping={0.1}>
            <div className="w-100 flex justify-center my-10">
              <div className="md:w-5/12 w-full px-3">
                <h1 className="font-bold roboto text-6xl 2xl:text-6xl text-center translate-x-0 md:-translate-x-6 md:text-left text-mainColor">
                  Una flota más segura
                </h1>
                <h2 className="roboto text-4xl 2xl:text-5xl text-black text-center translate-x-0 md:translate-x-6 md:text-right mt-3 font-light">
                  Beneficios para transportistas
                </h2>
              </div>
            </div>
          </Fade>
          <Fade cascade damping={0.1}>
            <CardContent cards={contentCards} />
          </Fade>
          <div className="w-full justify-center flex mt-0 md:mt-40 relative z-20 px-8 md:px-0">
            <Link href={"/products"}>
              <Button isDefault={true} />
            </Link>
          </div>
        </section>

        <section className="relative" id="contact">
          <Contact />
        </section>

        <section className="min-h-custom image2-background py-20 md:py-3 px-3 md:px-24 gap-10 flex flex-col items-center justify-center relative">
          <Fade>
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl uppercase font-light">
                Mejore tus estadísticas
              </h2>
              <h2 className="text-5xl md:text-6xl uppercase font-bold">
                con wisefleet
              </h2>
            </div>
          </Fade>

          <Fade>
            <div className="flex flex-wrap relative gap-3 md:gap-0">
              <div className="relative flex-1 px-6">
                <div className="flex items-center justify-center">
                  <h4 className="text-7xl md:text-9xl font-extrabold">99</h4>
                  <span className="text-3xl font-extrabold">%</span>
                </div>
                <p className="text-lg md:text-2xl max-w-xs text-center">
                  De nuestros clientes mantiene el servicio.
                </p>
                <Image
                  src={"/icon-line.svg"}
                  width={60}
                  height={10}
                  alt="spacer"
                  className="hidden lg:block absolute right-[-29px] top-1/4"
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
              <div className="relative flex-1 px-6">
                <div className="flex items-center justify-center">
                  <h4 className="text-7xl md:text-9xl font-extrabold">40</h4>
                  <span className="text-3xl font-extrabold">%</span>
                </div>
                <p className="text-lg md:text-2xl max-w-xs text-center">
                  Más económico respecto a la competencia.
                </p>
                <Image
                  src={"/icon-line.svg"}
                  width={60}
                  height={10}
                  alt="spacer"
                  className="hidden lg:block absolute right-[-29px] top-1/4"
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
              <div className="relative flex-1 px-6">
                <div className="flex items-center justify-center">
                  <h4 className="text-7xl md:text-9xl font-extrabold">100</h4>
                  <span className="text-3xl font-extrabold">+</span>
                </div>
                <p className="text-lg md:text-2xl max-w-xs text-center">
                  Réplicas para ingresar a diferentes mandantes.
                </p>
                <Image
                  src={"/icon-line.svg"}
                  width={60}
                  height={10}
                  alt="spacer"
                  className="hidden lg:block absolute right-[-29px] top-1/4"
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
              <div className="relative flex-1 px-6">
                <div className="flex items-center justify-center">
                  <h4 className="text-7xl md:text-9xl font-extrabold">99</h4>
                  <span className="text-3xl font-extrabold">%</span>
                </div>
                <p className="text-lg md:text-2xl max-w-xs text-center">
                  En ahorro de tiempo en la adquisición y funcionamiento del
                  servicio.
                </p>
              </div>
            </div>
            <div></div>
            <Link href={"/products"}>
              <Button isDefault={false} />
            </Link>
          </Fade>
        </section>

        <section
          className="min-h-screen py-8 px-3 md:px-24 mt-4 md:mt-0 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 relative"
          id="download"
        >
          <Fade>
            <div className="flex flex-col gap-4  justify-self-end md:-mt-20">
              <h1 className="text-center md:text-left text-mainColor text-5xl md:text-7xl font-bold">
                Descarga la APP
              </h1>
              <h4 className="text-center md:text-left text-black font-bold text-xl md:text-2xl">
                Y comienza a mejorar la gestión de tu flota
              </h4>
              <p className="px-3 md:px-0 text-gray-600  max-w-md leading-loose">
                La revolucionaria aplicación que te ayudará a visualizar tu
                flota por patente en tiempo real y estadísticas de
                comportamiento por móvil, y en conjunto con la plataforma,
                <span className="text-mainColor font-bold">
                  {" "}
                  podrás llevar tu gestión al siguiente nivel.
                </span>
              </p>

              <div className="flex relative z-10">
                <a
                  className="cursor-pointer"
                  href="https://apps.apple.com/us/app/wisefleet/id1588966610"
                  target={"_blank"}
                >
                  <Image
                    src={"/app-store.svg"}
                    width={200}
                    height={120}
                    alt="App store - Wisefleet"
                  />
                </a>

                <a
                  className="cursor-pointer"
                  href="https://play.google.com/store/apps/details?id=com.wisetrack.wisefleet&pcampaignid=web_share"
                  target={"_blank"}
                >
                  <Image
                    src={"/play-store.svg"}
                    width={200}
                    height={120}
                    alt="Play store- Wisefleet"
                  />
                </a>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="md:-ml-40">
              <Image
                src={"/app-3.png"}
                width={900}
                height={800}
                alt="mobile app"
              />
            </div>
          </Fade>
        </section>

        <section className="py-20 px-3 md:px-24 mt-4 md:mt-0 mb-40" id="qna">
          <Fade>
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-light text-black md:mr-20">
                Preguntas
              </h2>
              <h2 className="text-5xl md:text-7xl font-bold text-mainColor md:ml-20">
                Frecuentes
              </h2>
            </div>
          </Fade>

          <Fade>
            <div className="w-full flex flex-col gap-6 items-center justify-center mt-6 px-4 md:px-0">
              {questions.map((ques, index) => {
                return (
                  <Question
                    key={index}
                    answer={ques.answer}
                    question={ques.question}
                  />
                );
              })}
            </div>
          </Fade>
        </section>
      </main>

      <Footer />
    </>
  );
}
