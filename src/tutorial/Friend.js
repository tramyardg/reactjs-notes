/*

 When you separate a container component from a presentational component,
 the presentational component will always end up like this: one render() function,
 and no other properties.

 If you have a component class with nothing but a render function, then you can rewrite that component
 class in a very different way. Instead of using React.Component, you can write it as JavaScript function!

 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class Friend extends Component {
  render() {
    return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
  }
}

// the component class below can be written as
export const Friend = () => {
  return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
};

ReactDOM.render(
    <Friend />,
    document.getElementById('app')
);