import React from 'react'
import './Card.css'

const Card = ({ title, body, img }) => {
  console.log(img)
  return (
    <div className='tc grow bg-light-pink br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <img className='Card-img' src={`${process.env.PUBLIC_URL}/${img}`} alt={title}/>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Card