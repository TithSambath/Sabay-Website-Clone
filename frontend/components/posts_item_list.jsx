import React from "react"
import PropTypes from "proptypes"
import { getStrapiMedia } from "../lib/media"

export default function PostsItemList({ postsLabel, articles }) {
  return (
    <div className="popular-articles-section sm:w-full md:w-300px bg-F6F6F6 pt-1.5 pb-1.5 pl-2.5 pr-2.5 h-fit md:drop-shadow-lg">
      <h3 className="text-xl font-bold text-636b6f">{postsLabel}</h3>
      <hr className="w-14 border-red-600 pb-3 border-t-4" />
      <div className="articles flex-wrap w-full">
        {articles.map((article) => (
          <div
            key={`pop-article-${article.attributes.slug}`}
            className="article w-full flex space-x-2 mb-3"
          >
            <img
              alt="article-img"
              className="article-image object-cover w-10 h-10"
              src={getStrapiMedia(article.attributes.image)}
            />
            <h6 className="article-title grow font-semibold">
              {article.attributes.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  )
}

PostsItemList.propTypes = {
  articles: PropTypes.arrayOf(Object).isRequired,
}
