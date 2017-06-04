import React, { Component } from 'react';
import './SelectBox.css';

class SelectBox extends Component {
  render() {
    return (
      <div className='select-box'>
        <div className='choice' onClick={() => this.props.select('0')}><div>0</div></div>
        <div className='choice' onClick={() => this.props.select('1')}><div>1</div></div>
        <div className='choice' onClick={() => this.props.select('2')}><div>2</div></div>
        <div className='choice' onClick={() => this.props.select('3')}><div>3</div></div>
        <div className='choice' onClick={() => this.props.select('5')}><div>5</div></div>
        <div className='choice' onClick={() => this.props.select('8')}><div>8</div></div>
        <div className='choice' onClick={() => this.props.select('13')}><div>13</div></div>
        <div className='choice' onClick={() => this.props.select('21')}><div>21</div></div>
        <div className='choice' onClick={() => this.props.select('34')}><div>34</div></div>
        <div className='choice' onClick={() => this.props.select('55')}><div>55</div></div>
        <div className='choice' onClick={() => this.props.select('89')}><div>89</div></div>
        <div className='choice' onClick={() => this.props.select('144')}><div>144</div></div>
        <div className='choice' onClick={() => this.props.select('?')}><div>?</div></div>
        <div className='choice' onClick={() => this.props.select('∞')}><div>∞</div></div>
        <div className='choice' onClick={() => this.props.select('coffee')}><div className='coffee'>&nbsp;</div></div>
      </div>
    );
  }
}

export default SelectBox;
