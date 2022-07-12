import React from "react"
import ArticleSM from "./articles_sm";
import ArticleGroup from "./article_group";
import Card from "./card"

export default function MixArticles({ articles }) {
    const recentArticles = articles.slice(0, 3);
    const lastArticles = articles.slice(3, articles.length + 1)

    if (articles.length == 0) return null;

    return (
        <ArticleGroup groupCategory={"ALL"} classes="pl-5 pr-5 md:w-750px lg:w-970px xl:w-1170px mt-10">
            <div className=" 
                recent-article
                hidden
                md:grid md:grid-cols-3 gap-1 mb-5
                pl-5 pr-5">
                {
                    recentArticles.map((article) => {
                        return <Card
                            article={article}
                            key={`article_${article.attributes.slug}`}
                        />
                    })
                }
            </div>
            <div className="flex">
                <div className=" 
                    lg:w-8/12
                    hidden
                    last-article
                    md:grid md:grid-cols-3 lg:grid-cols-4 gap-1 mb-5
                    pl-5 pr-5">
                    {
                        lastArticles.map((article) => {
                            return <Card
                                article={article}
                                key={`article__left__${article.attributes.slug}`}
                            />
                        })
                    }
                </div>
                <div className="ads">

                </div>
            </div>
            <ArticleSM articles={articles}/>
        </ArticleGroup>
    )
}