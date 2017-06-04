import React, { Component } from 'react';
import SelectBox from './SelectBox.js';
import ReadyToReveal from './ReadyToReveal.js';
import RevealCard from './RevealCard.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {choice: null, reveal: false};

    this.select = this.select.bind(this);
    this.reveal = this.reveal.bind(this);
    this.reset  = this.reset.bind(this);
  }

  select(choice) {
    this.setState(prevState => ({
      choice: choice,
      reveal: false
    }));
  }

  reveal() {
    this.setState(prevState => ({
      reveal: true
    }));
  }

  reset() {
    this.setState(prevState => ({
      choice: null,
      reveal: false
    }));
  }

  render() {
    if (this.state.choice === null ) { return (<SelectBox select={this.select}/>) };
    if (this.state.reveal === false) { return (<ReadyToReveal reveal={this.reveal}/>) };

    return (<RevealCard choice={this.state.choice} reset={this.reset}/>);
  }
}

export default App;
