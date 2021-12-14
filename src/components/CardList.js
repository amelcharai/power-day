import React from 'react'
import Card from './Card'

const CardList = ({ ingredient }) => {
  return (
    <div>
      {
        ingredient.map((_user, i) => {
          return (
            <Card
              key={i}
              img={ingredient[i].img}
              title={ingredient[i].title}
              body={ingredient[i].body}
              video={ingredient[i].video}
              />
          )
        })
      }
    </div>
  )
}

export default CardList