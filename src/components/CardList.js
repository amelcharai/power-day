import React from 'react'
import Card from './Card'

const CardList = ({ recipe }) => {
  return (
    <div>
      {
        recipe.map((_user, i) => {
          return (
            <Card
              key={i}
              img={recipe[i].img}
              title={recipe[i].title}
              body={recipe[i].body}
              video={recipe[i].video}
              />
          )
        })
      }
    </div>
  )
}

export default CardList