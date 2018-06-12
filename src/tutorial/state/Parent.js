import React, {Component} from 'react';
import {Child} from './Child';

class Parent extends Component {
  constructor (props) {
    super(props);
    this.state = {name: 'Frarthur'};
  }

  render () {
    // you can call Child component for rendering
    return <Child name={this.state.name} />;
  }
}

export default Parent;
