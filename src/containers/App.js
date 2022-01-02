import React, { useState, useEffect } from 'react'
import logo from '../logo.png'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'

const { apiUri } = require('../config')

const pngtreeRef = <a className="App-link" href='https://www.pngtree.com/' target="_blank" rel="noreferrer">pngtree.com</a>
const subpngRef = <a className="App-link" href='https://www.subpng.com/' target="_blank" rel="noreferrer">subpng.com</a>

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [searchfield, setSearchfield] = useState('')

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  useEffect( () => {
    fetch(`${apiUri}/card`)
      .then(response => response.json())
      .then(cards => { setRecipes(cards) })
  },[])

  const filteredRecipes = recipes.filter(recipe => {
    const recipeContent = recipe.title+recipe.body
    return recipeContent.toLowerCase().includes(searchfield.toLowerCase())
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" id="logo-image"/>
        <h1 id="header">Power Day</h1>
      </header>
      <SearchBox searchChange={onSearchChange}/>
      <CardList recipe={filteredRecipes} />
      <footer>
        <p className='App-footer'>Image credits to {pngtreeRef} and {subpngRef}</p>
      </footer>
    </div>
  )
}

export default App
