import React from "react"
import { menuItems } from "./HeaderItems"
import Button from "../Button/Button"
import "./Header.css"
import { useState } from "react"
import { FaReact, FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <nav className="NavbarItem">
      <h1 className="navbar-logo">
        React <FaReact class="react-logo" />
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <ImCross /> : <FaBars />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li>
              <a className={item.cName} href={item.url} key={index}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  )
}

export default Header
