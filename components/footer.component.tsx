import Image from "next/image"
import Link from "next/link"
export default function Footer () {
    return (
        <footer className="bg-footerBg pt-8 pb-4">
        <div className="px-3 md:px-16 pb-6 flex gap-10 md:gap-20 ml-0 md:ml-10 items-center flex-col md:flex-row">
          <Image width={320} height={320} src={"/logo2.svg"} alt="WiseFleet" />
          <div className="flex md:gap-16">
            <ul className="flex flex-col gap-3 pt-10 px-4">
              <li className="font-bold text-gray-500 mb-4 text-2xl">Links</li>
              <li className="text-gray-500 text-md hover:text-gray-800 md:text-2xl">
                <Link href={"/#plans"}>
                  Planes
                </Link>
              </li>
              <li className="text-gray-500 text-md hover:text-gray-800 md:text-2xl">
                <Link href={"/#plans"}>
                  Beneficios  
                  </Link>
              </li>
              <li className="text-gray-500 text-md hover:text-gray-800 md:text-2xl">
                <Link href={"/#contact"}>
                  Contacto
                </Link>
              </li>
              <li className="text-gray-500 text-md hover:text-gray-800 md:text-2xl">
                <Link href={"/#download"}>
                  Descarga
                </Link>
              </li>
              <li className="text-gray-500 text-md hover:text-gray-800 md:text-2xl">
                <Link href={"/#qna"}>
                  Q&A
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-3 pt-10 px-4">
              <li className="font-bold text-gray-500 mb-4 text-2xl">
                Contáctanos
              </li>
              <li className="text-gray-500 text-sm md:text-2xl">+51 1 6282611</li>
              <li className="text-gray-500 text-sm md:text-2xl">info.peru@wisetrackcorp.com</li>
              <li className="text-gray-500 text-sm md:text-2xl">Calle El Boulevard 182, oficina 603, Surco, Lima</li>
            </ul>
          </div>
        </div>

        <div className="bg-footerSecond w-full flex gap-2 md:gap-0 md:flex-row flex-col-reverse justify-between text-md py-4 md:py-2 px-6 md:px-60 mt-3 items-center">
          <a className="text-sm cursor-pointer hover:text-gray-300">Copyright</a>

          <div className="flex gap-10 items-center">
            <a className="text-sm cursor-pointer transition hover:text-gray-300" target={"_blank"} href="https://www.facebook.com/wisetrackperu/">
            <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
            </a>
            <span className="text-gray-400">|</span>
            <a className="text-sm cursor-pointer hover:text-gray-300" target={"_blank"} href="https://www.instagram.com/wisetrackperuoficial/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    )
}