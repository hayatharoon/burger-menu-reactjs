import * as React from "react"
import PropTypes from "prop-types"
// import Navbar from "./Navbar/Navbar"
import "./layout.css"
import Header from "./Header/Header"

const Layout = () => {
  return (
    <div id="outer-container">
      {/* <Navbar /> */}
      <Header />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
