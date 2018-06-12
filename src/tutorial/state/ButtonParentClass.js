import React, {Component} from 'react';
import {ButtonChildClass} from './ButtonChildClass';

class ButtonParentClass extends Component {
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
    return (<ButtonChildClass onClick={this.handleClick} numClicks={this.state.totalClicks}/>);
  }
}

// always do this if you're rendering this component elsewhere
export default ButtonParentClass;
