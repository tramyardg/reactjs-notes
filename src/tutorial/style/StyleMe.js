import React, {Component} from 'react';

class StyleMe extends Component {
  render () {
    const styles = {
      background: 'lightblue',
      color: 'darkred',
      marginTop: '100px',
      marginBottom: 100,
      fontSize: '50px'
    };
    const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;
    /*
     In React, if you write a style value as a number, then the unit "px" is assumed.
     How convenient! If you want a font size of 30px, you can write:
      { fontSize: 30 }
     If you want to use units other than "px," you can use a string:
      { fontSize: "2em" }
     */
    return (styleMe);
  }
}

export default StyleMe;
