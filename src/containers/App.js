import React, { useState } from 'react'
import logo from '../logo.png'
import './App.css'
import CardList from '../components/CardList'
import Recipes from '../data/Recipes.json'
import SearchBox from '../components/SearchBox'

const pngtreeRef = <a className="App-link" href='https://www.pngtree.com/' target="_blank" rel="noreferrer">pngtree.com</a>
const subpngRef = <a className="App-link" href='https://www.subpng.com/' target="_blank" rel="noreferrer">subpng.com</a>

const App = () => {
  const [searchfield, setSearchfield] = useState('')

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRecipes = Recipes.filter(recipe => {
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
