import React from "react"
import ArticleSM from "./articles_sm";
import ArticleGroup from "./article_group";
import Card from "./card"
import CardHighlight from "./card_hightlight";

const Articles = ({ category, articles }) => {

  const recentArticle = articles[0];
  const otherArticles = articles.slice(1, articles.length)

  if (articles.length == 0) return null;

  return (
    <ArticleGroup groupCategory={category}>
      <div className="category-articles w-full flex space-x-0 md:space-x-5">
        <div className="recent-category-article lg:w-1/3 md:w-fit md:flex hidden">
          <CardHighlight
            highlightColor={`bg-pri-custom-red`}
            article={recentArticle}
            key={`article_${recentArticle.attributes.slug}`}
          />
        </div>
        <div className="other-category-articles h-fit lg:w-2/3 md:grid lg:grid-cols-4 gap-3 gap-y-1 md:grid-cols-2 md:w-fit hidden">
          {
            otherArticles.map((article) => {
              return <Card
                article={article}
                key={`article_${article.attributes.slug}`}
              />
            })
          }
          {
            otherArticles.map((article) => {
              return <Card
                article={article}
                key={`article_${article.attributes.slug}`}
              />
            })
          }
          {
            otherArticles.map((article) => {
              return <Card
                article={article}
                key={`article_${article.attributes.slug}`}
              />
            })
          }
        </div>
        <ArticleSM articles={articles}/>
      </div>
    </ArticleGroup>
  )
}

export default Articles;