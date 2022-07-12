import React from "react"
import PropsTypes from "proptypes"
import Link from "next/link"
import NextImage from "./image"
import classNames from "classnames"

export default function Card({ article, classes="w-40" }) {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className={classNames("md:w-auto shrink-0 hover:no-underline hover:scale-95", classes)}>
        <NextImage image={article.attributes.image} />
        <div className="cus-card-body bg-white pl-0 text-left">
          <h3 className="text-sm line-clamp-3 font-hanuman mt-1.5">
            {article.attributes.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  article: PropsTypes.shape({
    attributes: PropsTypes.shape({
      slug: PropsTypes.string,
      image: PropsTypes.shape({}),
      title: PropsTypes.string,
    }),
  }).isRequired,
}
