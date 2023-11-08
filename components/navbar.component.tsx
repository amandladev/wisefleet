import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  openNavbar: () => void;
  isOpen: boolean;
  mainPage?: boolean
}
export default function Navbar({ openNavbar, isOpen, mainPage = true }: Props) {
  return (
    <header className="sticky top-0 z-30 bg-mainColor main-navbar">
      <motion.nav 
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="bg-mainColor flex flex-row justify-between items-center px-4 py-4 md:px-24 relative z-20">
        <Link href="/#start">
          <Image width={93} height={40} src={"/logo.svg"} alt="Wisefleet logo" />
        </Link>
        <div className="items-center gap-10 hidden md:flex">
          <ul className="flex gap-4 mr-10">
            <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
              <Link href="/#plans">
                Planes
              </Link>
            </li>
            <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
              <Link href="/#benefits">
                Beneficios
              </Link>
            </li>
            <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
              <Link href="/#contact">
                Contacto
              </Link>
            </li>
            <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
              <Link href="/#download">
                Descarga
              </Link> 
            </li>
            <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
              <Link href="/#qna">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
          {
            mainPage &&
            <Link href="/products">
              <button className="uppercase hover:bg-black transition bg-l-purple text-sm rounded flex items-center gap-3 px-8 py-2">
                <span className="spacing-l">obtén aquí</span>
                <Image width={13} height={13} alt="prev slide" src={"/arrow.svg"} />
              </button>
            </Link>
          }
        </div>
        <div
          onClick={openNavbar}
          className="p-3 border-4 border-white border-solid rounded-full h-12 w-12 
        md:hidden flex items-center justify-center"
        >
          <span className="inline-block align-middle border-4 border-solid border-transparent p-3 border-effect rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </span>
        </div>
      </motion.nav>
      <div
        className={`absolute w-full z-10 bg-mainColor py-6 md:hidden block ${
          isOpen ? "slide-top-back " : "nav-responsive-bottom slide-top"
        }`}
      >
        <ul className="flex flex-col gap-4 items-center justify-center">
          <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
            <Link href="/#plans">
              Planes
            </Link>
          </li>
          <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
            <Link href="/#benefits">
              Beneficios
            </Link>
          </li>
          <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
            <Link href="/#contact">
              Contacto
            </Link>
          </li>
          <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
            <Link href="/#download">
              Descarga
            </Link>
          </li>
          <li className="cursor-pointer uppercase hover:text-hoverColor transition-hov">
            <Link href="/#qna">
              Preguntas frecuentes
            </Link>
          </li>
          <Link href="/product">
            <button className="uppercase hover:bg-black transition bg-l-purple w-full md:w-4/5 text-sm rounded flex items-center justify-center gap-3 px-8 py-2">
              <span className="spacing-l">obtén aquí</span>
              <Image width={13} height={13} alt="prev slide" src={"/arrow.svg"} />
            </button>
          </Link>
        </ul>
      </div>
      <style jsx>{`
        @-webkit-keyframes slide-top {
          0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
          100% {
            -webkit-transform: translateY(-300px);
            transform: translateY(-300px);
          }
        }
        @keyframes slide-top {
          0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
          100% {
            -webkit-transform: translateY(-300px);
            transform: translateY(-300px);
          }
        }

        @-webkit-keyframes slide-top-back {
          0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }

          100% {
            -webkit-transform: translateY(-300px);
            transform: translateY(-300px);
          }
        }
        @keyframes slide-top-back {
          0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
          100% {
            -webkit-transform: translateY(-300px);
            transform: translateY(-300px);
          }
        }

        .slide-top-back {
          -webkit-animation: slide-top-back 0.3s linear both;
          animation: slide-top-back 0.3s linear both;
        }

        .slide-top {
          -webkit-animation: slide-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            reverse both;
          animation: slide-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
            both;
        }

        .nav-responsive-bottom {
          height: 300px;
        }
        .border-effect:hover {
          border-color: rgba(0, 0, 0, 0.4);
          transition: border 0.15s ease-in-out, border-color 0.15s ease-in-out;
        }
        .transition-hov {
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
        }
 
      `}</style>
    </header>
  );
}
