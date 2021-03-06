import React from "react"
import PropTypes from "proptypes"
import Link from "next/link"
import NextImage from "./image"

export default function CardHighlight({ article, highlightColor }) {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="card-hightlight min-w-350px max-w-350px flex flex-col h-full hover:no-underline hover:scale-95">
        <NextImage image={article.attributes.image} />
        <div
          className={`cus-card-body h-full md:h-fit lg:h-full p-3 text-left ${highlightColor}`}
        >
          <h3 className="text-2xl line-clamp-3 text-white font-bold ml-5 mr-5 text-ellipsis overflow-hidden font-bayon">
            {article.attributes.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

CardHighlight.defaultProps = {
  highlightColor: "#ffffff",
}

CardHighlight.propTypes = {
  article: PropTypes.arrayOf(Object).isRequired,
  highlightColor: PropTypes.string,
}
