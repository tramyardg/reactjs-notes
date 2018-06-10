import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './App';
import ExampleData from './tutorial/exampleData';
import Button from './tutorial/defaultProps';

import registerServiceWorker from './registerServiceWorker';
const rootDiv = document.getElementById('root');
ReactDOM.render(<App />, rootDiv);

const headings = ['When', 'Who', 'Description'];
const data = [
    {
        "when": "2 minutes ago",
        "who": "Jill Dupre",
        "description": "Created new account"
    },
    {
        "when": "1 hour ago",
        "who": "Lose White",
        "description": "Added fist chapter"
    },
    {
        "when": "2 hours ago",
        "who": "Jordan Whash",
        "description": "Created new account"
    }
];
const dataContainer = document.getElementById('example-data');
ReactDOM.render(
    <ExampleData headings={headings} dataSet={data} />,
    dataContainer
);

Button.defaultProps = {text: 'I am a button'};

ReactDOM.render(
    <Button />,
    document.getElementById('testing')
);

registerServiceWorker();


// the app first points here
// then reads the import