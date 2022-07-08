import Card from "./card"

export default function ArticleSM({ articles }) {
    return (
        <div className="articles-sm-device w-full md:hidden">
            <div className="articles flex space-x-2 w-full">
                {
                    articles.map((article) => {
                        return <Card
                            article={article}
                            key={`article_${article.attributes.slug}`}
                        />
                    })
                }
            </div>
        </div>
    );
}