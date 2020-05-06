import React from 'react'
import koi_img from '../img/koi_fish_sm.png'

function FrontPage() {
  return(
    <div className="showcase">
        <div className="showcase-content">
            <div>
              <h1>Lorem, ipsum dolor</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eligendi ea cupiditate ab culpa nobis
              accusantium quas voluptas aliquid voluptatem.
              </p>
              <a className="btn primary" href="http://localhost:3000/">Button</a>
              <a className="btn secondary" href="http://localhost:3000/">Button</a>
            </div>
            <img src={koi_img} alt="koi_fish" />
        </div>
    </div>
  )
}

export default FrontPage