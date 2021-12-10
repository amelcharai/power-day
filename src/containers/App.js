import React, { Component } from 'react'
import logo from '../logo.png'
import './App.css'
import Scroll from '../components/Scroll'

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
          <h2>Stretching</h2>
          <p>On the bed, as the muscles are still warm</p>
          <h2>Hot water</h2>
          <p>Hydrate and reactivate the blood circulation</p>
          <h2>Jogging</h2>
          <p>Oxygene the brain, train the heart, build strong bones, strengthen muscles</p>
          <h2>Power Drink</h2>
          <p>Great breverage to strength your immune system:</p>
            <ul>
              <li>Ginger powder</li>
              <li>Turmeric</li>
              <li>Cinnamon</li>
              <li>Fenugreek</li>
              <li>Cayenne pepper</li>
              <li>Raw honey</li>
              <li>Warm water</li>
            </ul>
            <h2>Complimentary vitamins</h2>
            <p>Vitamin D for bone health and immunity</p>
        </Scroll>
      </div>
    )
  }
}

export default App
