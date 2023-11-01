export type ProductType = {
    id: number,
    title: string,
    type: string,
    price: number,
    features: string[],
    description?: string,
    image?: string
}