import React, {Component} from 'react';
import {SelectChildClass} from './SelectChildClass';
import {SelectSiblingClass} from './SelectSiblingClass';

class SelectParentClass extends Component {
  constructor (props) {
    super(props);
    this.state = {name: 'Frarthur'};
    this.changeName = this.changeName.bind(this); // so we can call property -> name directly
  }

  changeName (newName) {
    this.setState({
      name: newName
    });
  }

  render () {
    // you may call properties or functions just like a regular object inside a return
    return (
      <div>
        <SelectChildClass onChange={this.changeName}/>
        <SelectSiblingClass name={this.state.name}/>
      </div>
    );
  }
}

export default SelectParentClass;
