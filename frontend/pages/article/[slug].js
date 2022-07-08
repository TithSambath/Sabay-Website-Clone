import ReactMarkdown from "react-markdown"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import CategoryLayout from "../../components/category_layout"
import PopularArticle from "../../components/popular_articles"

const Article = ({ article, categories, popularArticles }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <CategoryLayout>
        <div className="article-background" style={{ background: `url(${imageUrl})` }}>
          <div className="article-detail md:w-750px lg:w-970px xl:w-1170px m-auto p-10 drop-shadow-lg bg-white">
            <div className="title pb-10">
              <h1 className="text-5xl font-bayon leading-relaxed">{article.attributes.title}</h1>
            </div>
            <div className="article-image mb-5">
              <img src={imageUrl} />
            </div>
            <div className="article-content-markdown font-hanuman">
              <ReactMarkdown
                source={article.attributes.content}
                escapeHtml={false}
              />
            </div>
          </div>
        </div>
        {/* <PopularArticle articles={popularArticles} /> */}
      </CategoryLayout>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {

  const [articlesRes, categoriesRes, popularArticlesRes] = await Promise.all([
    fetchAPI("/articles", {
      filters: {
        slug: params.slug,
      },
      populate: "*",
    }),
    fetchAPI("/categories"),
    fetchAPI("/articles", {
      populate: ["image"],
      fields: ['title', 'slug'],
      pagination: {
        page: 1,
        pageSize: 6
      }
    }),
  ])

  return {
    props: { 
      article: articlesRes.data[0], 
      categories: categoriesRes,
      popularArticlesRes: popularArticlesRes.data
    },
    revalidate: 1,
  }
}

export default Article
