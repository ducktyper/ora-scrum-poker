import React, { Component } from 'react';
import SelectBox from './SelectBox.js';
import ReadyToReveal from './ReadyToReveal.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <SelectBox />
        <ReadyToReveal />
      </div>
    );
  }
}

export default App;
