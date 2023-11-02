import Image from "next/image"
export default function Footer () {
    return (
        <footer className="bg-footerBg pt-8 pb-4">
        <div className="px-3 md:px-16 pb-6 flex gap-10 md:gap-20 ml-0 md:ml-10 items-center flex-col md:flex-row">
          <Image width={350} height={350} src={"/logo2.svg"} alt="WiseFleet" />
          <div className="flex gap-16">
            <ul className="flex flex-col gap-3 pt-10">
              <li className="font-bold text-gray-500 mb-4 text-2xl">Links</li>
              <li className="text-gray-500 text-md md:text-2xl">Home</li>
              <li className="text-gray-500 text-md md:text-2xl">Pricing</li>
              <li className="text-gray-500 text-md md:text-2xl">Download</li>
              <li className="text-gray-500 text-md md:text-2xl">About</li>
              <li className="text-gray-500 text-md md:text-2xl">Service</li>
            </ul>

            <ul className="flex flex-col gap-3 pt-10">
              <li className="font-bold text-gray-500 mb-4 text-2xl">
                Contact Us
              </li>
              <li className="text-gray-500 text-md md:text-2xl">+880 1234567</li>
              <li className="text-gray-500 text-md md:text-2xl">youremail@gmail.com</li>
              <li className="text-gray-500 text-md md:text-2xl">Rangpur City</li>
            </ul>
          </div>
        </div>

        <div className="bg-footerSecond w-full flex gap-2 md:gap-0 md:flex-row flex-col-reverse justify-between text-md py-4 md:py-2 px-6 md:px-60 mt-3 items-center">
          <a className="text-sm cursor-pointer hover:text-gray-300">Copyright</a>

          <div className="flex gap-10 items-center">
            <a className="text-sm cursor-pointer transition hover:text-gray-300">Terms of use</a>
            <span className="text-gray-400">|</span>
            <a className="text-sm cursor-pointer hover:text-gray-300">Privacy Policy</a>
          </div>
        </div>
      </footer>
    )
}