import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Button from "@/components/button.component"

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

            <main className="h-screen relative py-6 image-background">
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="rounded-lg fixed light-background top-1/2 -translate-y-1/2 right-0 left-0 m-auto w-full lg:w-2/5 h-full lg:h-4/5">
                    <div className="flex flex-col py-10 items-center gap-10 px-16 md:px-0">
                        <h1 className="text-3xl md:text-4xl text-mainColor font-extrabold ">Tú compra ha sido procesada!</h1>
                        
                        <div className="payment-ok custom-filter-color  ">
                            <Image src={'/ok.svg'} width={400} height={400} alt="success" />
                        </div>

                        <div className="text-xl text-mainColor">
                            <p>En breve te llegara un correo con los detalles de tu compra.</p>
                            <p className="text-center">Gracias por tu preferencia!</p>
                        </div>
                        <Link href={'/'}>
                            <div className="bg-transparent hover:bg-mainColor transition hover:text-white border-mainColor text-mainColor border-2 px-6 py-4 rounded-lg mt-3 text-xl">
                                Finalizar
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </main>
        </>
    )
}