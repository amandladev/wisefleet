export type SlidesType = Slide[]

export interface Slide {
  id: number
  title: string
  content: string
  img: string
  mobile_img: string
  content2?: string
}