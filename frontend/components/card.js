import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="w-40 md:w-auto hover:no-underline hover:scale-95">
        <NextImage image={article.attributes.image}/>
        <div className="cus-card-body bg-white pl-0 text-left">
          <h3 className="text-sm line-clamp-3 font-hanuman mt-1.5">
            {article.attributes.title}
          </h3>
        </div>
      </a>
    </Link>
  )
}

export default Card