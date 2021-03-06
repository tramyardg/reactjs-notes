import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './App';
import MyData from './tutorial/myData';
import ExampleData from './tutorial/exampleData';
import Button from './tutorial/defaultProps';

// state testing
import MoodToggle from './tutorial/state/MoodToggle';
import ColorToggle from './tutorial/state/ColorToggle';

import Parent from './tutorial/state/Parent';
import ButtonParentClass from './tutorial/state/ButtonParentClass';
import SelectParentClass from './tutorial/state/SelectParentClass';

import StyleMe from './tutorial/style/StyleMe';
import Home from './tutorial/style/Home';
import GuineaPigsContainer from './tutorial/soc/containers/GuineaPigsContainer';
import BookList from './tutorial/proptypes/BookList';
import Input from './tutorial/forms/Input';
import EnthusedApp from './tutorial/lifecycle/updating/App';
import FetchExample from './tutorial/FetchExample';

import registerServiceWorker from './registerServiceWorker';
const rootDiv = document.getElementById('root');
ReactDOM.render(<App />, rootDiv);

const dataContainer = document.getElementById('example-data');
ReactDOM.render(<ExampleData headings={MyData.headingData} dataSet={MyData.rowData}/>, dataContainer);

Button.defaultProps = {text: 'I am a button'};
ReactDOM.render(<Button />, document.getElementById('testing'));

ReactDOM.render(<MoodToggle />, document.getElementById('state-mood'));
ReactDOM.render(<ColorToggle />, document.getElementById('state-toggle-color'));

ReactDOM.render(<Parent />, document.getElementById('child-parent-state'));
ReactDOM.render(<ButtonParentClass />, document.getElementById('child-parent-button'));
ReactDOM.render(<SelectParentClass />, document.getElementById('child-parent-select'));

ReactDOM.render(<StyleMe/>, document.getElementById('styling'));
ReactDOM.render(<Home />, document.getElementById('home-style'));
ReactDOM.render(<GuineaPigsContainer />, document.getElementById('guinea-pigs'));
ReactDOM.render(<BookList />, document.getElementById('book-list'));
ReactDOM.render(<Input/>, document.getElementById('react-forms'));
ReactDOM.render(<EnthusedApp/>, document.getElementById('enthused'));
ReactDOM.render(<FetchExample/>, document.getElementById('fetch-example'));

registerServiceWorker();
