import ReactMarkdown from "react-markdown"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import CategoryLayout from "../../components/category_layout"
import PostsItemList from "../../components/posts_item_list"
import SquareAds from "../../components/square_ads"
import RectangleAds from "../../components/rectangle_ads"
import Link from "next/link"
import RelateArticle from "../../components/related_post"
import RelatedTags from "../../components/related_tags"

function Article({ article, categories, popularArticles }) {
  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  console.log(popularArticles)

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="bg-fixed relative w-full h-full hidden md:block">
        <div
          style={{ background: `url(${imageUrl})` }}
          className="article-background w-full h-full absolute bg-no-repeat bg-100% bg-top blur"
        >
        </div>
        <div className="gradient-layer w-full h-1/2 top-1/2 absolute" style={{ background: "linear-gradient(to bottom, rgba(246, 246, 246, 0) 0%, #f6f6f6 100%)" }}></div>
        <CategoryLayout>
          <div className="article-detail hidden md:block min-w-395px max-w-815px m-auto mt-0 p-10 drop-shadow-lg bg-white">
            <div className="title pb-10">
              <h1 className="text-5xl font-bayon leading-relaxed">
                {article.attributes.title}
              </h1>
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
            <br/>
            <RelatedTags/>
            <br/>
            <RelateArticle/>
          </div>
          {/* <PopularArticle articles={popularArticles} /> */}
          <div className="right-content w-300px h-fit">
            <RectangleAds adsImage={'https://ads.sabay.com/images/225a992a7e041dc317cdae5ec34e4d76.gif'} mb="mb-2" />
            <RectangleAds adsImage={'https://ads.sabay.com/images/7e0b1845ef1b068bfecc1b7a32cfa719.gif'} mb="mb-6" />
            <PostsItemList postsLabel={'POPULAR ARTICLES'} articles={popularArticles} />
            <br />
            <SquareAds adsImage={'https://ads.sabay.com/images/3856404ef4ba3d91cd02aa1aa016d8b2.jpg'} mb="mb-6" />
            <PostsItemList postsLabel={'NEW ARTICLES'} articles={popularArticles} />
            <br />
            <SquareAds adsImage={'https://ads.sabay.com/images/4fdab1184de785aefd5edac3aedef100.jpg'} mb="mb-6" />
          </div>
        </CategoryLayout>
      </div>

      {/* Mobile Screen */}
      <div className="block md:hidden w-full pl-5 pr-5 pt-2.5 bg-white">
        <div className="Ads-wrapper flex flex-col justify-center items-center">
          <h6>Advertisment</h6>
          <SquareAds adsImage={'https://ads.sabay.com/images/4fdab1184de785aefd5edac3aedef100.jpg'} mb="mb-6" />
        </div>
        <div className="article-title">
          <h3 className="text-2xl">{article.attributes.title}</h3>
          <div className="small text-xs mb-2">
            <div className="date">
              Yesterday Time 12:56
            </div>
            <div className="comment-share">
              Comment 0 | Shared 0
            </div>
          </div>
          <hr />
          <div className="article-image mt-2.5 mb-5 w-full">
            <img src={imageUrl} />
          </div>
          <div className="article-content-markdown font-hanuman">
            <ReactMarkdown
              source={article.attributes.content}
              escapeHtml={false}
            />
          </div>
        </div>
        <div className="Ads-wrapper flex flex-col justify-center items-center">
          <h6>Advertisment</h6>
          <SquareAds adsImage={'https://ads.sabay.com/images/4fdab1184de785aefd5edac3aedef100.jpg'} mb="mb-6" />
        </div>
        <br />
        <RelatedTags/>
        <br/>
        <PostsItemList postsLabel={'POPULAR ARTICLES'} articles={popularArticles} />
        <br/>
        <PostsItemList postsLabel={'NEW ARTICLES'} articles={popularArticles} />
        <br/>
        <RelateArticle/>
        <br/>
      </div>
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
      fields: ["title", "slug"],
      pagination: {
        page: 1,
        pageSize: 6,
      },
    }),
  ])

  return {
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes,
      popularArticles: popularArticlesRes.data,
    },
    revalidate: 1,
  }
}

export default Article
