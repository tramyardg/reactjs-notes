import React, {Component} from 'react';
import {SelectChildClass} from './SelectChildClass';

class SelectParentClass extends Component {
  constructor (props) {
    super(props);
    this.state = {name: 'Frarthur'};
    this.changeName = this.changeName.bind(this); // so we can call name directly
  }

  changeName (newName) {
    this.setState({
      name: newName
    });
  }

  render () {
    return (
      <SelectChildClass name={this.state.name} onChange={this.changeName} />
    );
  }
}

export default SelectParentClass;
