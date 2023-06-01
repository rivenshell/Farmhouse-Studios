import React from "react"

const Nav = () => {
  return (
    <>
      <div>Nav</div>
      <ul>
        <li>
          <a href="/home" className="site-home">
            Home
          </a>
          <a href="/projects" className="site-projects">
            Projects
          </a>
          <a href="/contact" className="site-contact">
            Contact
          </a>
        </li>
      </ul>
    </>
  )
}

export default Nav
