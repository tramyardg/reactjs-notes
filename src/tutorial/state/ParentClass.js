import React, {Component} from 'react';
import {ChildClass} from './ChildClass';

class ParentClass extends Component {
  constructor (props) {
    super(props);
    this.state = {totalClicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const total = this.state.totalClicks;
    // that is why handleClick is bind so you can call totalClicks directly
    this.setState({totalClicks: total + 1});
  }

  render () {
    return (<ChildClass onClick={this.handleClick} numClicks={this.state.totalClicks}/>);
  }
}

export default ParentClass;
