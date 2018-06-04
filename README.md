# reactjs-notes
ReactJS notes with no particular order
### create ReactJS app
```
npx create-react-app myapp
cd myapp
npm start
```
### two important imports
```
import React from 'react';
import ReactDOM from 'react-dom';
```
### self closing tag
```
In JSX, you have to include the slash.
Fine in JSX: <br />
NOT FINE AT ALL in JSX: <br>
```
### curly braces in JSX
```
Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX.
You can do this by wrapping your code in curly braces.
<h1>{2 + 3}</h1>
```
