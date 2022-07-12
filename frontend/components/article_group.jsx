import React from "react"
import PropTypes from "proptypes"
import classNames from "classnames"

export default function ArticleGroup({ children, groupCategory, classes }) {
  return (
    <div className={classNames('article-group m-auto', classes)}>
      <div className="drop-shadow-lg bg-white articles flex flex-col">
        <span
          className="
                flex
                article-label
              bg-red-500 w-fit pl-5 pr-5 pt-2.5 pb-2.5 text-white"
        >
          <h3 className="text-white uppercase text-lg font-bold">
            {groupCategory}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <hr className="divide-y-[3px] border-red-500" />
        <div className="articles flex flex-col mt-5 mb-5 ml-9 mr-9">{children}</div>
      </div>
    </div>
  )
}

ArticleGroup.defaultProps = {
  groupCategory: "",
}

ArticleGroup.propTypes = {
  children: PropTypes.element.isRequired,
  groupCategory: PropTypes.string,
}
