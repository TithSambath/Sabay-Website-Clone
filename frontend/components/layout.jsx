import Link from "next/link"
import React from "react"
import Footer from "./footer"
import Nav from "./nav"

// eslint-disable-next-line react/prop-types
function Layout({ children, categories }) {
  return (
    <>
      <Nav categories={categories} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
