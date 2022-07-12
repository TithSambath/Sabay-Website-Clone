import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import MixArticles from "../components/mix_articles"
import RecentArticles from "../components/recent_articles"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, articleByCategory }) => {

  return (
    <Layout categories={categories}>

      <RecentArticles articles={articles}/> 
      <MixArticles category={"All"} articles={articles} />
      {
        articleByCategory.map(category => {
          return <Articles 
                  key={category.slug} 
                  category={category.attributes.name} 
                  articles={category.attributes.articles.data.slice(0,3)} />
        })
      }
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, articleByCategoryRes,] = await Promise.all([
    fetchAPI("/articles", {
      populate: ["image"],
      fields: ['title', 'slug']
    }),
    fetchAPI("/categories"),
    fetchAPI("/categories", {
      populate: {
        articles: {
          populate: 'image',
          fields: ['title', 'slug'],
          sort: ['id:desc']
        }
      },
      select: ['title', 'slug']
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      articleByCategory: articleByCategoryRes.data
    },
    revalidate: 1
    // revalidate: 1,
  }
}

export default Home
