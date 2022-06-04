import React from 'react'
import './LinkCard.css'

import ImgTwitter from './../img/img-twitter.png'
import ImgGithub from './../img/img-github.png'
import ImgLinkedin from './../img/img-linkedin.png'

const ImgMap = {
  "twitter": ImgTwitter,
  "github": ImgGithub,
  "linkedin": ImgLinkedin
}

function LinkCard(props) {
  return (
    <div className={`link-card bg-${props.title}`}>
      <a href={props.link} className="hyperlink">
      <div className="container-link-handle">
        <div>
          <img src={ImgMap[props.title]} className="card-img"/>
        </div>
        <div className="handle-name">
          <h3 className="username">{props.username}</h3>
        </div>
      </div>

      <div className="handle-description">
        <p>{props.tagline}</p>
      </div>
      </a>
    </div>
  )
}

export default LinkCard
