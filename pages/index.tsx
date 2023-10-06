// import { Inter } from "next/font/google";
import Navbar from "@/components/navbar.component";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Carousel from "@/components/carousel.component";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/700.css";
import Contact from "@/components/contact.component";
import Question from "@/components/question.component";
import { QuestionType } from "@/types/question.type";
import { CardType } from "@/types/card.type";
import CardContent from "@/components/cardContent.component";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [contentCards, setContentCards] = useState<CardType[]>([]);
  const toggleNavbar = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    fetch("/questions.json")
      .then((resp) => {
        return resp.json();
      }).then((json) => {
        setQuestions(json);
      }).catch((err) => console.error(err))
    fetch("/content-cards.json")
    .then((resp) => {
      return resp.json();
    }).then((json) => {
      setContentCards(json);
    }).catch((err) => console.error(err))
  }, []);

  return (
    <>
      <Head>
        <title>Wisefleet</title>
        <meta name="description" content="Soluciones para transportistas" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="relative">
        <Navbar openNavbar={toggleNavbar} isOpen={isOpen} />
        <Carousel />

        <section className="flex flex-col md:flex-row gap-3 min-h-screen pt-3 mb-12 md:mb-0 px-3 md:px-24 custom-background">
          <div className="flex-1 order-2 md:order-1 md:px-3 px-8">
            <Image
              width={1000}
              height={800}
              src={"/img-descubre.png"}
              alt="wisefleet"
            />
          </div>

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
            {/* ONLY DESKTOP */}
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

            <button className="mt-8 uppercase hover:bg-hoverColor hover:border-transparent transition w-full bg-mainColor border-white border-2 text-lg rounded-xl md:w-80 flex items-center justify-center gap-3 px-8 py-2">
              <span className="spacing-l">obtén aquí</span>
            </button>
          </div>
        </section>

        <section className="min-h-screen image-background pt-10">
          <div className="text-center mt-12">
            <h1 className="text-6xl md:text-7xl roboto font-bold">
              Elige el plan
            </h1>
            <h4 className="text-3xl md:text-4xl roboto font-bold mt-3">
              que se acomode mejor a tu negocio
            </h4>
          </div>

          <article className="">
            <figure></figure>
            <figure></figure>
            <figure></figure>
          </article>
        </section>

        <section className="min-h-screen bg-white pt-10 relative">
          <div className="w-100 flex justify-center my-10">
            <div className="md:w-5/12  xl:w-1/3 w-full px-3">
              <h1 className="font-bold roboto text-6xl 2xl:text-6xl text-center translate-x-0 md:-translate-x-6 md:text-left text-mainColor">
                Una flota más segura
              </h1>
              <h2 className="roboto text-4xl 2xl:text-5xl text-black text-center translate-x-0 md:translate-x-6 md:text-right mt-3 font-light">
                Beneficios para transportistas
              </h2>
            </div>
          </div>

          <CardContent cards={contentCards} />

          <div className="w-full justify-center flex mt-0 md:mt-40 relative z-20 px-8 md:px-0">
            <button
              type="submit"
              className="mt-6 uppercase hover:bg-hoverColor hover:border-transparent transition w-full bg-mainColor border-white border-2 text-lg rounded-xl md:w-80 flex items-center justify-center gap-3 px-8 py-2"
            >
              <span className="spacing-l">obtén aquí</span>
            </button>
          </div>
        </section>

        <Contact />

        <section className="min-h-custom image2-background py-20 md:py-3 px-3 md:px-24 gap-10 flex flex-col items-center justify-center relative">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl uppercase font-light">
              Mejore tus estadísticas
            </h2>
            <h2 className="text-5xl md:text-6xl uppercase font-bold">
              con wisefleet
            </h2>
          </div>

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

          <button className="z-50 uppercase relative hover:bg-mainColor hover:border-transparent transition bg-transparency border-white border-2 text-lg rounded-xl w-80 flex items-center justify-center gap-3 px-8 py-2">
            <span className="spacing-l">obtén aquí</span>
          </button>
        </section>

        <section className="min-h-screen py-8 px-3 md:px-24 mt-4 md:mt-0 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 relative">
          <div className="flex flex-col gap-4  justify-self-end md:-mt-20">
            <h1 className="text-mainColor text-5xl md:text-7xl font-bold">
              Descarga la APP
            </h1>
            <h4 className="text-black font-bold text-xl md:text-2xl">
              Y comienza a mejorar la gestión de tu flota
            </h4>
            <p className="text-gray-600  max-w-md leading-loose">
              La revolucionaria aplicación que te ayudará a visualizar tu flota
              por patente en tiempo real y estadísticas de comportamiento por
              móvil, y en conjunto con la plataforma,
              <span className="text-mainColor font-bold">
                {" "}
                podrás llevar tu gestión al siguiente nivel.
              </span>
            </p>

            <div className="flex">
              <Image src={"/app-store.svg"} width={200} height={120} alt="App store - Wisefleet" />

              <Image src={"/play-store.svg"} width={200} height={120} alt="Play store- Wisefleet" />
            </div>
          </div>
          <div className="md:-ml-40">
            <Image
              src={"/app-3.png"}
              width={900}
              height={800}
              alt="mobile app"
            />
          </div>
        </section>

        <section className="py-20 px-3 md:px-24 mt-4 md:mt-0 mb-40">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-light text-black md:mr-20">
              Preguntas
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold text-mainColor md:ml-20">
              Frecuentes
            </h2>
          </div>

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
        </section>
      </main>

      <footer className="bg-footerBg pt-8 pb-4">
        <div className="px-16 pb-6 flex gap-10 md:gap-20 ml-10 flex-col md:flex-row">
          <Image width={350} height={350} src={"logo2.svg"} alt="WiseFleet" />
          <div className="flex gap-16">
            <ul className="flex flex-col gap-3 pt-10">
              <li className="font-bold text-gray-500 mb-4 text-2xl">Links</li>
              <li className="text-gray-500 text-2xl">Home</li>
              <li className="text-gray-500 text-2xl">Pricing</li>
              <li className="text-gray-500 text-2xl">Download</li>
              <li className="text-gray-500 text-2xl">About</li>
              <li className="text-gray-500 text-2xl">Service</li>
            </ul>

            <ul className="flex flex-col gap-3 pt-10">
              <li className="font-bold text-gray-500 mb-4 text-2xl">Contact Us</li>
              <li className="text-gray-500 text-2xl">+880 1234567</li>
              <li className="text-gray-500 text-2xl">youremail@gmail.com</li>
              <li className="text-gray-500 text-2xl">Rangpur City</li>
            </ul>
          </div>
        </div>

        <div className="bg-footerSecond w-full flex gap-2 md:gap-0 md:flex-row flex-col-reverse justify-between text-md py-4 md:py-2 px-6 md:px-60 mt-3 items-center">
          <a className="text-sm">Copyright</a>

          <div className="flex gap-10 items-center">
            <a className="text-sm">Terms of use</a>
            <span className="text-gray-400">|</span>
            <a className="text-sm">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
