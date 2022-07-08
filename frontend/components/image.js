import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
  const {alternativeText, width, height } = image.data.attributes

  return (
    <img className="aspect-video object-cover" src={getStrapiMedia(image)}/>
  )
}

export default Image
