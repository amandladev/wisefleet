import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

import Footer from "@/components/footer.component"
import Navbar from "@/components/navbar.component"

export default function Success () {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = () => {
        setIsOpen((current) => !current)
      }
    console.log(router.query)

    return (
        <>
            <Head>
                <title>Wisefleet - Checkout</title>
                <meta name="description" content="Soluciones para transportistas" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            {/* <Navbar openNavbar={toggleNavbar} isOpen={isOpen} mainPage={false}/> */}
            <main className="h-screen relative py-6">
                <div className="rounded-lg fixed bg-mainColor top-1/2 -translate-y-1/2 right-0 left-0 m-auto w-full lg:w-2/5 h-full lg:h-4/5">
                    <div className="flex flex-col py-10 items-center">
                        <h1 className="text-4xl text-white font-extrabold">Gracias por tu compra!</h1>
                            <div className="bg-black px-6 py-4 rounded-lg mt-3">
                                <Link href={'/'}>
                                    Finalizar
                                </Link>
                            </div>
                    </div>

                </div>
            </main>
            {/* <Footer /> */}
        </>
    )
}