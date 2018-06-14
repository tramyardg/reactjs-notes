import React, {Component} from 'react';
import {AttentionGrabber} from './AttentionGrabber';
import {myStyle} from './myStyle';

const divStyle = {
  background: myStyle.background,
  height: '100%'
};

class Home extends Component {
  render () {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

// you use export default if you're rendering this component elsewhere
export default Home;
