// import { Inter } from "next/font/google";
import Navbar from "@/components/navbar.component";
import Head from "next/head";
import { useState } from "react";
import Carousel from "@/components/carousel.component";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/900.css';
import '@fontsource/roboto/700.css';

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen((current) => !current);
  };
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
        {/* <section>
          <div>
            <h1>Descubre Wisefleet</h1>
          </div>
          <div>
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Recusandae ex eligendi, molestiae magnam voluptatem impedit tenetur omnis quod. 
              Maxime exercitationem nostrum ea dolorem doloremque consequatur quam deserunt voluptatum architecto iusto?</p>
          </div>
        </section> */}

        <section className="flex flex-col md:flex-row items-center min-h-screen pt-10 custom-background">
          <div className="md:w-1/2 order-2 md:order-1">
            <h1>IMAGEN</h1>
          </div>
          <div className="order-1 md:order-2">
            <h1>Descubre Wisefleet</h1>
          </div>
          <div className="order-last p-4">
            <p className="text-black text-xl">
              Revolucionaria solución sin contrato paras las empresas de transporte que requieren cumplir con la información que les solicitan
              los mandantes y al mismo tiempo controlar de manera simple sus vehículos.
            </p>
            <p className="text-black text-xl mt-6">
              Consta de un <span className="font-bold text-hoverColor">dispositivo autoinstalable, plataforma y una aplicación</span> apta para cualquier telefono.
            </p>

            <button className="mt-6 uppercase hover:bg-hoverColor hover:border-transparent transition w-full bg-mainColor border-white border-2 text-lg rounded-xl md:w-80 flex items-center justify-center gap-3 px-8 py-2">
                  <span className="spacing-l">obtén aquí</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
