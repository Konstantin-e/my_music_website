import React from 'react'

function Footer() {
  return(
    <footer>
      <div className="container"> 
        <div className="logo">
          <a href="http://localhost:3000/">[koi_music]</a>
        </div>
        <div className="col-1">
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt laudantium 
          nam delectus saepe error sequi maiores 
          aliquid, excepturi perspiciatis ratione.
        </div>
        <div className="col-2">
          <ul>
            <li><a href="http://localhost:3000/">Link</a></li>
            <li><a href="http://localhost:3000/">Link</a></li>
            <li><a href="http://localhost:3000/">Link</a></li>
            <li><a href="http://localhost:3000/">Link</a></li>
          </ul>
        </div>
      </div>
      <div className="soc-media">
        <a className="fa fa-github" href="http://localhost:3000/"></a>
        <a className="fa fa-instagram" href="http://localhost:3000/"></a>
        <a className="fa fa-facebook" href="http://localhost:3000/"></a>
      </div>
    </footer>
  )
}

export default Footer