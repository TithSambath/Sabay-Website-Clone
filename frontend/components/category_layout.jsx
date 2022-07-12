import React from "react"
import PropTypes from "proptypes"

export default function CategoryLayout({ children }) {
  return (
    <div className="category-layout drop-shadow-lg flex md:w-750px lg:w-970px xl:w-1170px m-auto justify-between pt-3 space-x-3">
      {children}
    </div>
  )
}

CategoryLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
