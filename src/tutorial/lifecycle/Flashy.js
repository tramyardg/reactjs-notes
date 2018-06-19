import React, {Component} from 'react';
import ReactDOM from 'react-dom';
/*
 * Whenever a component mounts,
 * componentWillMount is called first,
 * followed by render,
 * followed by componentDidMount
 *
 * If your React app uses AJAX to fetch initial data from an API,
 * then componentDidMount is the place to make that AJAX call
 *
 * */
class Flashy extends Component {
  componentWillMount() {
    // this alert should only happen once
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }

  componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
  }

  render() {
    alert('Flashy is rendering!');
    return (
        <h1 style={{color: this.props.color}}>
          OOH LA LA LOOK AT ME I AM THE FLASHIEST
        </h1>
    );
  }
}

ReactDOM.render(
    <Flashy color='red'/>,
    document.getElementById('app')
);

/*
 * Function shorthand syntax:
 * () => {}
 * */

setTimeout(() => {
  ReactDOM.render(
      <Flashy color='green'/>,
      document.getElementById('app')
  );
}, 2000);

export default Flashy;

/*
 * You should see two alerts in order.
 * 1. componentWillMount()->alert: AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!
 * 2. render->alert: Flashy is rendering!
 * 3. componentDidMount()->alert: YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!
 * Then it renders
 * 4. OOH LA LA LOOK AT ME I AM THE FLASHIEST
 * 5. After two seconds, it will render->alert: Flashy is rendering!
 * 6. Then it will render 4 now with green font color.
 * */