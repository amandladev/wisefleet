import Image from "next/image";

interface Props {
    slideManager: () => void
    image: string
    direction: 'right' | 'left'
    size?: 30 | 45 | 60
    middle?: boolean
    onlyMobile?: boolean
}

export default function CarouselButton ({ slideManager, image, direction, size = 30, middle = false, onlyMobile = false }: Props) {
    return  <button
    onClick={slideManager}
    className={`carousel-next border-solid border-2 border-white absolute 
      transform -translate-y-1/2 transition  text-white 
    md:p-2 p-1 mr-0 md:mr-3 rounded-full ${direction}-3 md:${direction}-20 ${onlyMobile ? 'block md:hidden' : ''}  ${middle ? 'top-1/2 hover:bg-mainColor  bg-gray-400' : 'bottom-72 md:bottom-1/2 hover:bg-mainTransparency hover:border-transparent bg-gray-500'}`}
  >
    {/* arrow.svg */}
    <Image width={size} height={size} alt={direction} src={image} />
  </button>
}