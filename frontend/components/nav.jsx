import React from "react"
import PropsType from "proptypes"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"

function Nav({ categories }) {
  const route = useRouter()
  const currentCate = route.query.slug

  const isActive = (pathname) => {
    if (pathname === "/") return "bg-secon-custom-red text-white font-bold"
    return currentCate === pathname
      ? "bg-secon-custom-red text-white font-bold"
      : ""
  }

  const triggerMenu = () => {
    const elem = document.getElementById("sm-nav")
    if (elem.classList.contains("block")) {
      elem.classList.replace("block", "hidden")
    } else {
      elem.classList.replace("hidden", "block")
    }
  }

  return (
    <>
      <nav className="bg-cus-black pt-4 font-bayon text-lg hidden md:block">
        <div className="container md:w-750px lg:w-970px xl:w-1170px m-auto">
          <div className="nav-head flex">
            <div className="uk-navbar-left pl-5 pr-5">
              <Link href="/">
                <img
                  alt="sabay-logo"
                  width={80}
                  className="cursor-pointer"
                  src="https://news.sabay.com.kh/img/logo.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-12 mt-4 bg-pri-custom-red flex items-center">
          <ul className="pl-5 pr-5 flex justify-between h-full z-50 md:w-750px lg:w-970px xl:w-1170px m-auto font-bold text-gray-300">
            <Link href="/">
              <li
                key="id-home"
                className={`${isActive(
                  route.pathname
                )} flex items-center p-3.5 w-fit text-center cursor-pointer hover:text-white active:text-white`}
              >
                <span className="uk-link-reset uppercase">Home</span>
              </li>
            </Link>
            {categories.map((category) => (
              <Link
                key={`link${category.id}`}
                href={`/category/${category.attributes.slug}`}
              >
                <li
                  key={category.id}
                  className={`${isActive(
                    category.attributes.slug
                  )} flex items-center p-3.5 w-fit hover:text-white text-center cursor-pointer active:text-white`}
                >
                  <span className="uk-link-reset uppercase">
                    {category.attributes.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="sm-nav bg-black pt-4 pb-4 font-bayon text-lg block w-full md:hidden">
        <div className="container w-full m-auto">
          <div className="nav-head w-full flex justify-between">
            <button
              type="button"
              onClick={() => triggerMenu()}
              className="menu-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <Link href="/">
              <img
                alt="sabay-logo"
                width={40}
                className="cursor-pointer"
                src="https://news.sabay.com.kh/img/logo.png"
              />
            </Link>
            <img
              alt="deal-logo"
              width={40}
              className="cursor-pointer"
              src="https://media.sabay.com/media/Testing(1)/gif/611c767eaf4c2_1629255240.gif"
            />
          </div>
          <ul id="sm-nav" className="hidden w-full mt-5">
            <Link href="/">
              <li
                key="id-home"
                className={`${isActive(
                  route.pathname
                )} flex items-center p-3.5 w-full text-center cursor-pointer hover:text-white active:text-white`}
              >
                <span className="uk-link-reset uppercase">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </span>
              </li>
            </Link>
            <div className="grid grid-cols-2">
              {categories.map((category) => (
                // eslint-disable-next-line react/jsx-key
                <Link href={`/category/${category.attributes.slug}`}>
                  <li
                    key={category.id}
                    className={`${isActive(
                      category.attributes.slug
                    )} flex items-center p-3.5 w-full hover:text-white text-center cursor-pointer active:text-white`}
                  >
                    <span className="uk-link-reset uppercase">
                      {category.attributes.name}
                    </span>
                  </li>
                </Link>
              ))}
            </div>
            <div className="w-full flex justify-center">
              <img
                alt="deal-logo"
                width={40}
                className="cursor-pointer"
                src="https://media.sabay.com/media/Testing(1)/gif/611c767eaf4c2_1629255240.gif"
              />
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}

Nav.propTypes = {
  categories: PropsType.arrayOf(Object).isRequired,
}

export default Nav
