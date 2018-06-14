import React, {Component} from 'react';
import {myStyle} from './myStyle';

const h1Style = {
  color: myStyle.color,
  fontSize: myStyle.fontSize,
  fontFamily: myStyle.fontFamily,
  padding: myStyle.padding,
  margin: 0
};

export class AttentionGrabber extends Component {
  render () {
    return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
  }
}
