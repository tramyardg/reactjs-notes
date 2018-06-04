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
import React from 'react'; {// for creating component}
import ReactDOM from 'react-dom'; {// for rendering}
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
### comments
- {// This is a comment }
- {/* This is a comment */}
- /* 
Multi
Line
Comment
*/
### styles in JSX
```
We can represent this as a JavaScript object in the CamelCase fashion.
var headingStyle = { backgroundColor: 'FloralWhite', fontSize: '19px'};
return (
  <th style={headingStyle}>heading</th>
);
```
### conditional statement in JSX
```
// Moving if/else logic to a function
var showResult = function() {
  if(this.props.success === true)
    return <SuccessComponent />
  else
    return <ErrorComponent />
};
// Using ternary operator
<div className={ success ? 'green' : 'red' }/>
React.createElement("div", {className: success ? 'green' : 'red'})
```
### React.createElement(type, [props], [...children])
- type: (such as 'div' or 'span'
- [props]:  React component type (a class or a function), or a React fragment type.
- [...children]
```
// Using HTML entity inside JSX tags.
<div> Mike &amp; Shawn </div>
// will produce
React.createElement("div", null, " Mike & Shawn ")
```
