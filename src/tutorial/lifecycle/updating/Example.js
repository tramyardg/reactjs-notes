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

  /*
  * componentWillUpdate gets called in between shouldComponentUpdate and render
  *
  * The main purpose of componentWillUpdate is to interact with things outside of the React architecture.
  * If you need to do non-React setup before a component renders, such as checking the window size or
  * interacting with an API, then componentWillUpdate is a good place to do that
  * */
  componentWillUpdate(nextProps, nextState) {
    alert('Component is about to update!  Any second now!');
  }

  /*
  * componentDidUpdate gets called after any rendered HTML has finished loading
  *
  * componentDidUpdate is usually used for interacting with things outside of the React environment,
  * like the browser or APIs. It's similar to componentWillUpdate in that way
  * except that it gets called after render instead of before.
  * */
  componentDidUpdate(prevProps, prevState) {
    alert('Component is done rendering!');
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