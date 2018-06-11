import React, {Component} from 'react';

const green = '#107400';
const yellow = '#FFD712';

class ColorToggle extends Component {
  constructor (props) {
    super(props);
    this.state = {color: green};
    // add this line below so that you can call setState or this keyword in changeColor method
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor () {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({color: newColor});
  }

  render () {
    return (
      <div style={{background: this.state.color}}>
        <button onClick={this.changeColor}>
            Change color
        </button>
      </div>
    );
  }
}

export default ColorToggle;
