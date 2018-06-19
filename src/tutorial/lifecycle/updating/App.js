import React, {Component} from 'react';
import {Enthused} from './Enthused';

class App extends Component {
  constructor(props) {
    super(props);

    // default state
    this.state = {
      enthused: false,
      text: ''
    };

    this.toggleEnthusiasm = this.toggleEnthusiasm.bind(this);
    this.addText = this.addText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * set enthused to true if false,
   * set enthused to false if true
   */
  toggleEnthusiasm() {
    this.setState({
      enthused: !this.state.enthused
    });
  }

  addText(newText) {
    let text = this.state.text + newText;
    this.setState({
      text: text
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    let button;
    if (this.state.enthused) {
      button = (<Enthused toggle={this.toggleEnthusiasm} addText={this.addText}/>);
    } else {
      button = (<button onClick={this.toggleEnthusiasm}>Add Enthusiasm!</button>);
    }
    return (
        <div>
          <h1>Auto-Enthusiasm</h1>
          <textarea rows="7" cols="40" value={this.state.text} onChange={this.handleChange}>
          </textarea>
          {button}
          <h2>{this.state.text}</h2>
        </div>
    );
  }
}

export default App;