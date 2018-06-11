import React, {Component} from 'react';

class MoodToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {mood: 'good'};
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood === 'good' ? 'bad' : 'good';
    this.setState({mood: newMood});
  }

  render() {
    return (
        <div>
          <h1>I'm feeling {this.state.mood}!</h1>
          <button onClick={this.toggleMood}>
            Click Me
          </button>
        </div>
    );
  }
}

export default MoodToggle;