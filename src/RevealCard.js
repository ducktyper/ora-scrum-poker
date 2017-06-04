import React, { Component } from 'react';
import './RevealCard.css';

class RevealCard extends Component {
  render() {
    return (
      <div className='reveal-card size-1' onClick={() => this.props.reset()}>
        {this.props.choice}
      </div>
    );
  }
}

export default RevealCard;
