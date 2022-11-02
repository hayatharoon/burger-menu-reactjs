import React from "react"
import { elastic as Menu } from "react-burger-menu"
import "./navbar.css"

const Navbar = () => {
  return (
    <div id="page-wrap">
      <Menu>
        <a href="home" className="menu-item">
          Home
        </a>
        <a href="solutions" className="menu-item">
          Solutions
        </a>
        <a href="process" className="menu-item">
          Process
        </a>
        <a href="peoject" className="menu-item">
          Projects
        </a>
        <a href="contact" className="menu-item">
          Contact
        </a>
      </Menu>
    </div>
  )
}

export default Navbar
