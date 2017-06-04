import React, { Component } from 'react';
import './RevealCard.css';

class RevealCard extends Component {
  displayClass() {
    if (this.props.choice === 'coffee') return 'size-coffee'

    return `size-${this.props.choice.length}`;
  }

  displayText() {
    if (this.props.choice === 'coffee') return '';

    return this.props.choice;
  }

  render() {
    return (
      <div className={`reveal-card ${this.displayClass()}`} onClick={() => this.props.reset()}>
        {this.displayText()}
      </div>
    );
  }
}

export default RevealCard;
