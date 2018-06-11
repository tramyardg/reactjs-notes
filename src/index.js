import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './App';
import MyData from './tutorial/myData';
import ExampleData from './tutorial/exampleData';
import Button from './tutorial/defaultProps';

import registerServiceWorker from './registerServiceWorker';
const rootDiv = document.getElementById('root');
ReactDOM.render(<App />, rootDiv);

const dataContainer = document.getElementById('example-data');
ReactDOM.render(
    <ExampleData headings={MyData.headingData} dataSet={MyData.rowData}/>,
    dataContainer
);

Button.defaultProps = {text: 'I am a button'};

ReactDOM.render(
    <Button />,
    document.getElementById('testing')
);

registerServiceWorker();
