import React from 'react'
import './Card.css'

const Card = ({ title, body, img, video }) => {
  const bodyComponent = body ? <p>{body}</p> : ""
  const videoComponent= video ? <iframe width="322" height="182" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen="true"></iframe> : ""
  return (
    <div className='tc mw6 grow bg-light-pink br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <img className='Card-img' src={`${process.env.PUBLIC_URL}/${img}`} alt={title}/>
        <h2>{title}</h2>
        {bodyComponent}
        {videoComponent}
      </div>
    </div>
  )
}

export default Card