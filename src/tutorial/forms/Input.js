import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {userInput: ''};
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
        <div>
          <h1>Input onChange example</h1>
          <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
          <p>Value I get from input due to onChange event:</p>
          <h1>{this.state.userInput}</h1>
        </div>
    );
  }
}

export default Input;