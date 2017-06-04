import React, { Component } from 'react';
import Shake from './Shake';
import './ReadyToReveal.css';

class ReadyToReveal extends Component {
  componentDidMount() {
    Shake.enable(this.props.reveal);
  }

  componentWillUnmount() {
    Shake.disable();
  }

  render() {
    return (
      <div className='ready-to-reveal' onClick={() => this.props.reveal()}>
        Ready
      </div>
    );
  }
}

export default ReadyToReveal;
