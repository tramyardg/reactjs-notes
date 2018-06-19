import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Flashy extends Component {
  render() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
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
      <Flashy color='green' />,
      document.getElementById('app')
  );
}, 2000);

export default Flashy;
/*
* You should see two alerts in order.
* 1. AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!
* 2. Flashy is rendering!
* Then it renders
* 3. OOH LA LA LOOK AT ME I AM THE FLASHIEST
* 4. After two seconds, it will repeat 1-3 and
* another render will flash now with green font color.
* */