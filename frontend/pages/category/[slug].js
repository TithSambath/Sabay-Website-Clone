import Articles from "../../components/articles"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PopularArticle from "../../components/popular_articles"
import CategoryLayout from "../../components/category_layout"

const Category = ({ category, categories, popularArticles }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  }

  console.log(popularArticles)

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <CategoryLayout>
        <Articles
          category={category.attributes.name}
          articles={category.attributes.articles.data} />
        <PopularArticle articles={popularArticles}/>
      </CategoryLayout>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] })

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const [matchingCategories, allCategories, popularArticlesRes] = await Promise.all([
    fetchAPI("/categories", {
      filters: { slug: params.slug },
      populate: {
        articles: {
          populate: "*",
        },
      },
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
      category: matchingCategories.data[0],
      categories: allCategories,
      popularArticles: popularArticlesRes.data
    },
    revalidate: 1,
  }
}

export default Category
