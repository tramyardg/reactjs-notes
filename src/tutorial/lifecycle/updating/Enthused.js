import React, {Component} from 'react';

export class Enthused extends Component {
  componentDidMount() {
    // define a variable interval so we can stop it
    this.interval = setInterval(() => {
      this.props.addText('!');
    }, 15);
  }

  /*
   * componentWillUnmount is the only unmounting lifecycle method!
   *
   * If a component initiates any methods that require cleanup,
   * then componentWillUnmount is where you should put that cleanup
   * */
  componentWillUnmount() {
    // stop the adding of text
    clearInterval(this.interval);
  }

  render() {
    return (<button onClick={this.props.toggle}>Stop!</button>);
  }
}