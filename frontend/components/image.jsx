import React from "react"
import { getStrapiMedia } from "../lib/media"

// eslint-disable-next-line react/prop-types
function Image({ image }) {
  return (
    <img
      alt="img"
      className="aspect-video object-cover"
      src={getStrapiMedia(image)}
    />
  )
}

export default Image
