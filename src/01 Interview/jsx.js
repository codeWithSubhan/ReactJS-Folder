// Question:- What is JSX

// Answer:-
// JSX: extention of javascript that allows us to embed javascript css and react componenet into html
// 1. browsers do not understand JSX natively. It simply understand js and html  natively, create-react-app provide babel tools
// 2. Babel converts JSX into React.createElement function calls that can be understood by the JavaScript engine running in the browser.
// 3. JSX needs to be converted into standard JavaScript code that the browser can interpret. This is where Babel, comes into play.
// 4. By converting JSX to React.createElement calls, Babel ensures that the JSX code is translated into a form that React can process to build the virtual DOM.
// Example:-

// JSX
// const element = <h1 className="greeting">Hello, world!</h1>;

// after babel convert it
// const element = React.createElement(
//     'h1',
//     { className: 'greeting' },
//     'Hello, world!'
//   );

// rule of jsx
// 1. attr need to camelCase
// 2. js expression need to wrap up js mode {}
// 3. js statement is not allowed in js mode {}
// 4. jsx need have one root element
// 5. every tag need to be closed <br/>
// 6. inline style need to be an object in js mode {}
