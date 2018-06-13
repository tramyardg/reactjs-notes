import React, {Component} from 'react';

export class SelectChildClass extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /*
   * function that can take an event object
   * you cannot do this.props.onChange directly
   * */
  handleChange (e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render () {
    return (
      <div>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}
