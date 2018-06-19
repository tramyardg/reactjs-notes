import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/*
* There are five updating lifecycle methods:
* 1. componentWillReceiveProps
* 2. shouldComponentUpdate
* 3. componentWillUpdate
* 4. render
* 5. componentDidUpdate
* */
class Example extends Component {
  componentWillReceiveProps(nextProps) {
    alert('Check out the new props.text that I am about to get: ' + nextProps.text);
  }

  render() {
    return (<h1>{this.props.text}</h1>);
  }
}

// componentWillReceiveProps will get called here:
ReactDOM.render(
    <Example text="Hello world"/>,
    document.getElementById('app')
);

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
    <Example />,
    document.getElementById('app')
);