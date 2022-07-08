import { getStrapiMedia } from "../lib/media"

export default function PopularArticle({ articles }) {

    return (
        <div className="popular-articles-section mt-10 w-2/6">
            <h3 className="text-xl font-bold text-636b6f">POPULAR ARTICLES</h3>
            <hr className="w-12 border-red-600 pb-3" />
            <div className="articles w-full">
                {
                    articles.map(article => {
                        return (
                            <div key={`pop-article-${article.attributes.slug}`} className="article w-full flex space-x-2 mb-3">
                                <img
                                    className="article-image object-cover w-10 h-10"
                                    src={getStrapiMedia(article.attributes.image)}>
                                </img>
                                <h6 className="article-title grow font-semibold">
                                    {
                                        article.attributes.title
                                    }
                                </h6>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}