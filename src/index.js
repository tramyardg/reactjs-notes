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
import ParentClass from './tutorial/state/ParentClass';

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
ReactDOM.render(<ParentClass />, document.getElementById('child-parent-button'));

registerServiceWorker();
