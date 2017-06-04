import React, { Component } from 'react';
import './SelectBox.css';

class SelectBox extends Component {
  render() {
    return (
      <div className='select-box'>
        <div className='choice'><div>0</div></div>
        <div className='choice'><div>1</div></div>
        <div className='choice'><div>2</div></div>
        <div className='choice'><div>3</div></div>
        <div className='choice'><div>5</div></div>
        <div className='choice'><div>8</div></div>
        <div className='choice'><div>13</div></div>
        <div className='choice'><div>21</div></div>
        <div className='choice'><div>34</div></div>
        <div className='choice'><div>55</div></div>
        <div className='choice'><div>89</div></div>
        <div className='choice'><div>144</div></div>
        <div className='choice'><div>?</div></div>
        <div className='choice'><div>∞</div></div>
        <div className='choice'><div className='coffee'>&nbsp;</div></div>
      </div>
    );
  }
}

export default SelectBox;
