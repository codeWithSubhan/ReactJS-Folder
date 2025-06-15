// =========================================================== [1] ===========================================================//
// Question:- What is component and types

// Answer:-
// component: are the peace of ui that can be resuse multiple times.

// Tyepes:-
// 1. class:-  are ES6 classes that extend from React.Component and have access to lifecycle methods.
// 2. function:- JavaScript functions. They can use Hooks to manage state and lifecycle events.
// 3. controlled:-  form’s data is handled by the component’s state.
// 4. uncontrolled:-  form’s data is handled by DOM itself. like useRef
// 5. higher order:- take a component and return a new component, adding additional props or behavior.
// 6. pure:- different input, same ouput
// 7. impure:- sideEffect, same input different ouput

// =========================================================== [2] ===========================================================//
// Question:- Different between Function Components and Class Components

// Answer:-
// Function component:-
// 1. To Create:- Javascript function
// 2. state:- useState hook.
// 1. Javascript function that accepts props and returns JSX.
// 3. lifecycle:- useEffect hook.
// 4. function comp is simple and easly learn.

// why introduce function comp:- to sharing logic by custome hooks

// Class Component
// 1. To Create:- es6 classes, extending React.Component
// 2. State:- this.state and updated by using this.setState
// 1. class that extends React.Component and JSX inside the render method.
// 3. lifecycle:- pre-defined methods:- componentDidMount, componentDidUpdate, and componentWillUnmount
// 4. class comp is difficult due  it use contrucntion classes this keyword, pre-defined methods:- componentDidMount, componentDidUpdate, and componentWillUnmount
