interface Props {
    isDefault: boolean
    isProduct?: boolean
}
// hover:bg-mainColor hover:border-transparent bg-transparency border-white
export default function Button({ isDefault, isProduct = false }: Props)  {
    const transparent = 'hover:bg-mainColor bg-transparency'
    const normal = 'hover:bg-hoverColor bg-mainColor mt-8'
    const productButton = 'hover:bg-white hover:text-black bg-mainColor mt-8'
    return (
        <button className={`${isDefault && isProduct ? productButton : isDefault ? normal : transparent} hover:border-transparent uppercase border-white transition w-full border-2 text-lg rounded-xl md:w-80 flex items-center justify-center gap-3 px-8 py-2`}>
            <span className="spacing-l">obtén aquí</span>
        </button>)
}