import React, {Component} from 'react';
// import will have to navigate up one level, and then down into the components folder.
import { GuineaPigs } from '../components/GuineaPigs';
import { GUINEAPATHS } from './resources';

// component focus on state, props, and NOT rendering
class GuineaPigsContainer extends Component {
  constructor (props) {
    super(props);
    this.state = { currentGP: 0 };
    this.interval = null;
    this.nextGP = this.nextGP.bind(this);
  }

  nextGP () {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount () {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render () {
    let src = GUINEAPATHS[this.state.currentGP];
    // separation of concern: separates rendering of HTML-like JSX and business logic
    return (<GuineaPigs src={src} />);
  }
}

export default GuineaPigsContainer;
