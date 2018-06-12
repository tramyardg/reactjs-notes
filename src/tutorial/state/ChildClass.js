import React, { Component } from 'react';

export class ChildClass extends Component {
  render () {
    // console.log(this.props.clicks);
    return (
      <button onClick={this.props.onClick}>
          Click Me! {this.props.numClicks}
      </button>
    );
  }
}
