import React from "react"
import Link from "next/link"
import NextImage from "./image"
import { getStrapiMedia } from "../lib/media"

export default function ListItem({ article }) {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="w-full grid md:grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-y-4">
        <div className="article-img w-full h-36">
          <img
            alt=""
            className="w-full h-36 object-cover"
            src={getStrapiMedia(article.attributes.image)}
          />
        </div>
        <div className="cus-card-body bg-white pl-0 text-left col-span-2">
          <h3 className="text-base line-clamp-3 font-hanuman">
            កក្រើក! ពិតជារំភើបអ្នកឈ្នះម៉ូតូ Suzuki Nex Crossover 2022
            ក្នុងម្មវិធី “មហារង្វាន់ស្រោចធរណី” សបា្តហ៍ទី 3
          </h3>
          <h6 className="text-xs font-hanuman mt-1">
            <span className="text-gray-300"><i class="fa-solid fa-clock"></i></span>
            &nbsp;ថ្ងៃនេះ ម៉ោង 09:40
          </h6>
          <hr />
          <p className="detail text-sm font-hanuman mt-3 line-clamp-2">
            កក្រើកអស់ហើយ! រំភើបស្ទើរហោះជាងម្ចាស់រង្វាន់ទៅទៀត!
            សម្រាប់អ្នកឈ្នះម៉ូតូ Suzuki Nex Crossover ស៊េរីថ្មីឆ្នាំ 2022
            ក្នុងម្មវិធី “មហារង្វាន់ស្រោចធរណី” សបា្តហ៍ទី 3!
          </p>
        </div>
      </div>
    </Link>
  )
}
