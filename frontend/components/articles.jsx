import React from "react"
import PropTypes from "proptypes"
import ArticleSM from "./articles_sm"
import ArticleGroup from "./article_group"
import Card from "./card"
import CardHighlight from "./card_hightlight"

function Articles({ category, articles }) {
  const recentArticle = articles[0]
  const otherArticles = articles.slice(1, articles.length)

  if (articles.length === 0) return null

  return (
    <ArticleGroup
      groupCategory={category}
      classes="pl-5 pr-5 md:w-750px lg:w-970px xl:w-1170px mt-10"
    >
      <div className="category-articles w-full flex space-x-0 md:space-x-5">
        <div className="recent-category-article md:w-fit md:flex hidden">
          <CardHighlight
            highlightColor="bg-pri-custom-red"
            article={recentArticle}
            key={`article_${recentArticle.attributes.slug}`}
          />
        </div>
        <div className="other-category-articles h-fit md:grid lg:grid-cols-4 gap-3 gap-y-1 md:grid-cols-2 md:w-fit hidden">
          {otherArticles.map((article) => (
            <Card
                article={article}
                key={`article_${article.attributes.slug}`}
              />))
          }
          {
            otherArticles.map((article) => <Card
                article={article}
                key={`article_${article.attributes.slug}`}
              />)
          }
          {
            otherArticles.map((article) => <Card
                article={article}
                key={`article_${article.attributes.slug}`}
              />)
          }
        </div>
        <ArticleSM articles={articles} />
      </div>
    </ArticleGroup>
  )
}

Articles.propTypes = {
  category: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(Object).isRequired,
}

export default Articles;