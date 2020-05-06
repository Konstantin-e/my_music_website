import React from 'react'


function Navigation() {

  function handleClick(event) {
    event.target.classList.toggle("change");
    document.getElementById("navigation").classList.toggle("shrinked");
  }

  return(
        <nav id="navigation" className="shrinked">
          <ul className="menu">
            <div>
              <a className="logo" href="http://localhost:3000/">[koi_music]</a>
              <div className="x_bars" onClick={handleClick}>
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