import React from 'react';
import ReactDOM from 'react-dom';


import './css/index.css';
import App from './App';
import ExampleData from './tutorial/ExampleData';
import ExampleData2 from './tutorial/ExampleData2';
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
const exampleDataObj = {headings: headings, data: data};
// style 1
const exampleData = document.getElementById('example-data');
ReactDOM.render(
    <ExampleData exampleDataObj={exampleDataObj} />,
    exampleData
);

// style 2
const exampleData2 = document.getElementById('example-data2');
ReactDOM.render(
    <ExampleData2 headings={headings} dataSet={data} />,
    exampleData2
);

Button.defaultProps = {text: 'I am a button'};

ReactDOM.render(
    <Button />,
    document.getElementById('testing')
);

registerServiceWorker();


// the app first points here
// then reads the import