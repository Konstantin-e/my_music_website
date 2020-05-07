import React, { useState } from 'react'


function Navigation() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleClick(event) {
    setMenuIsOpen(!menuIsOpen)
  }

  return(
        <nav id="navigation" className={menuIsOpen ? "" : "shrinked"}>
          <ul className="menu">
            <div>
              <a className="logo" href="http://localhost:3000/">[koi_music]</a>
              <div className={`x_bars ${menuIsOpen && "change"}`} onClick={handleClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </div>
            <li><a href="http://localhost:3000/">Link</a></li>
            <li><a href="http://localhost:3000/">Link</a></li>
            <li><a href="http://localhost:3000/">Link</a></li>
            <li><a href="http://localhost:3000/">Link</a></li>
          </ul>
        </nav>
  )
}

export default Navigation