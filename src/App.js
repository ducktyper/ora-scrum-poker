import React, { Component } from 'react';
import SelectBox from './SelectBox.js';
import ReadyToReveal from './ReadyToReveal.js';
import RevealCard from './RevealCard.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {choice: null, reveal: false};
    // this.state = {choice: 1, reveal: false};
    // this.state = {choice: 1, reveal: true};
  }

  render() {
    if (this.state.choice === null ) { return (<SelectBox />) };
    if (this.state.reveal === false) { return (<ReadyToReveal />) };

    return (<RevealCard choice={this.state.choice}/>);
  }
}

export default App;
