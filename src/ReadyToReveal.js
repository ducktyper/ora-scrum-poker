import React, { Component } from 'react';
import './ReadyToReveal.css';

class ReadyToReveal extends Component {
  render() {
    return (
      <div className='ready-to-reveal' onClick={() => this.props.reveal()}>
        Ready
      </div>
    );
  }
}

export default ReadyToReveal;
