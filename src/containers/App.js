import React, { Component } from 'react'
import logo from '../logo.png'
import './App.css'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList'
import Ingredients from '../data/Ingredients.json'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-reference" href='https://pngtree.com/so/Hand'>Hand png from pngtree.com/</a>
          <h1>Power Day</h1>
        </header>
        <Scroll>
          <CardList ingredient={Ingredients} />
        </Scroll>
      </div>
    )
  }
}

export default App
