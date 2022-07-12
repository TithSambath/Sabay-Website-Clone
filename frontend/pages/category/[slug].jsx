import React from "react"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CategoryLayout from "../../components/category_layout"
import PostsItemList from "../../components/posts_item_list"
import ArticleGroup from "../../components/article_group"
import Card from "../../components/card"
import ListItem from "../../components/list_item"
import RectangleAds from "../../components/rectangle_ads"
import SquareAds from "../../components/square_ads"

function Category({ category, categories, popularArticles }) {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  }

  const articles = category.attributes.articles.data

  const recentArticles = articles.slice(0, 2)

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="web hidden md:block">
        <CategoryLayout>
          <ArticleGroup
            groupCategory={category.attributes.name}
            classes="md:395px lg:w-615px xl:w-815px"
          >
            <div className="flex flex-col">
              <div className="cate-recent-articles grid grid-cols-2 gap-6 h-fit mb-8">
                {recentArticles.map((article) => (
                  <Card
                    article={article}
                    key={`article_${article.attributes.slug}`}
                  />
                ))}
              </div>
              <div className="other-articles flex flex-col space-y-4">
                {articles.map((article) => (
                  <ListItem
                    article={article}
                    key={`article_${article.attributes.slug}`}
                  />
                ))}
              </div>
            </div>
          </ArticleGroup>
          <div className="right-content w-300px h-fit">
            <RectangleAds
              adsImage="https://ads.sabay.com/images/225a992a7e041dc317cdae5ec34e4d76.gif"
              mb="mb-2"
            />
            <RectangleAds
              adsImage="https://ads.sabay.com/images/7e0b1845ef1b068bfecc1b7a32cfa719.gif"
              mb="mb-2"
            />
            <RectangleAds
              adsImage="https://ads.sabay.com/images/225a992a7e041dc317cdae5ec34e4d76.gif"
              mb="mb-2"
            />
            <SquareAds
              adsImage="https://ads.sabay.com/images/4fdab1184de785aefd5edac3aedef100.jpg"
              mb="mb-6"
            />
            <PostsItemList
              postsLabel="POPULAR ARTICLES"
              articles={popularArticles}
            />
          </div>
        </CategoryLayout>
      </div>

      <div className="mobile block md:hidden">
        <div className="ads flex flex-col justify-center items-center">
          <h6>Advertisment</h6>
          <SquareAds
            adsImage="https://ads.sabay.com/images/4fdab1184de785aefd5edac3aedef100.jpg"
            mb="mb-6"
          />
        </div>
        <ArticleGroup
          groupCategory={category.attributes.name}
          classes="md:395px lg:w-615px xl:w-815px"
        >
          <div className="flex flex-col">
            <div className="other-articles grid grid-cols-2 gap-3">
              {articles.map((article) => (
                <Card
                  classes="w-full"
                  article={article}
                  key={`article_${article.attributes.slug}`}
                />
              ))}
            </div>
          </div>
        </ArticleGroup>
      </div>
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
  const [matchingCategories, allCategories, popularArticlesRes] =
    await Promise.all([
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
        fields: ["title", "slug"],
        pagination: {
          page: 1,
          pageSize: 6,
        },
      }),
    ])

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
      popularArticles: popularArticlesRes.data,
    },
    revalidate: 1,
  }
}

export default Category
