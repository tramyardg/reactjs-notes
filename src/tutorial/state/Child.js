import React, {Component} from 'react';

export class Child extends Component {
  // there's always a render in a component
  render () {
    // accepts props name from parent component
    return <h1>Hey, my name is {this.props.name}</h1>;
  }
}
