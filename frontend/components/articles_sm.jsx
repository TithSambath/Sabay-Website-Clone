import React from "react"
import PropTypes from "proptypes"
import Card from "./card"

export default function ArticleSM({ articles }) {
  return (
    <div className="articles-sm-device w-full md:hidden overflow-scroll">
      <div className="articles space-x-2 w-full">
        {articles.map((article) => (
          <Card article={article} key={`article_${article.attributes.slug}`} />
        ))}
      </div>
    </div>
  )
}

ArticleSM.propTypes = {
  articles: PropTypes.arrayOf(Object).isRequired,
}
