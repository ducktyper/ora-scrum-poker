import React, { Component } from 'react';
import SelectBox from './SelectBox.js';
import ReadyToReveal from './ReadyToReveal.js';
import RevealCard from './RevealCard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <SelectBox />
        <ReadyToReveal />
        <RevealCard choice='1'/>
      </div>
    );
  }
}

export default App;
