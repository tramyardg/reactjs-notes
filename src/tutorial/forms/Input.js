import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class Input extends Component {
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
          <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
          <p>Value I get from input due to onChange event:</p>
          <h1>{this.state.userInput}</h1>
        </div>
    );
  }
}

ReactDOM.render(
    <Input />,
    document.getElementById('app')
);