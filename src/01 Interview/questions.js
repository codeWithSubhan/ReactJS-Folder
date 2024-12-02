// =================================================================[1]==============================================================================================//
// 1. what is reactjs

// React was created by Jordan Walke, a software engineer at facebook.
// It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012.
// And On 29 May 2013 React was released.

// official definition: React is a JavaScript library for building user interfaces.
// crazy definition is 😜: React is Declarative, Components-Based and State-Driven JAVASCRIPT LIRAIRY FOR BUILDING USER INTERFACE.

// declarative: describe what the UI should look like given the data (items), and React takes care of the rest.
// Components: are the building blocks of user interfaces and can be resuse multiple times.
// state: is variable that can hold the data of application and can trigger re-render whenever state update and preserved it's value during render
// library: reactjs is library not a framework

// =================================================================[2]==============================================================================================//
// 2. different btw library and framework

// library:
// A library is a collection of pre-written code that developers can use to optimize tasks.
// It provides a set of functions and utilities that can be called upon to perform specific tasks without having to write the code from scratch.

// Focused: Libraries usually focus on a specific functionality . For example, React is a library for building user interfaces.
// Examples: react-router-dom, react-toastfy, axios, fetch, leaflet, react-redux, react-spinners, ui material.

// framework:
// It includes multiple libraries, and all together create framework. and guidelines for building applications.

// Focused: Frameworks typically cover a wide range of functionalities. For example Angular is a framework for building web applications.
// Examples: Angular, Django, Ruby, bootstrap, next.js, remix.

// =================================================================[3]==============================================================================================//
// what are the features, advantages and disadvantages of reactjs

// features/advantages
// 1. Component-Based
// 2. Virtual DOM
// 3. Performance/Faster rendering
// 4. Declarative
// 5. JSX(JavaScript Syntax Extension)
// 6. One-way Data Binding
// 8. Simplicity
// 9. SEO-Friendly
// 10.React Native
// 11.Development Tools
// 12.Easy to Learn, Easy to Use
// 13.Less code

// disadvantages
// 1. programmer need to learn updated as react update or it's library fromework change requently.
// 2. it's not for cheap website as it's expensive
// 3. Complexity and Learning Curve:
// 4. JSX Syntax:
// 5. many languages need to complate before reach reactjs 😂

// =================================================================[4]==============================================================================================//
// what is jsx

// jsx: extention of javascript that allows us to embed javascript css and react componenet into html
// 1. browsers do not understand JSX natively. It simply understand js and html  natively, create-react-app provide babel tools
// 2. Babel converts JSX into React.createElement function calls that can be understood by the JavaScript engine running in the browser.
// 3. JSX needs to be converted into standard JavaScript code that the browser can interpret. This is where Babel, comes into play.
// 4. By converting JSX to React.createElement calls, Babel ensures that the JSX code is translated into a form that React can process to build the virtual DOM.
// Example:-

// jsx
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
// 4. js need have one root element
// 5. every tag need to be closed <br/>
// 6. inline style need to be an object in js mode {}

// =================================================================[5]==============================================================================================//
// what is component and types
// component: are the peace of ui that create whole ui by combine peaces

// tyepes
// 1. class:-  are ES6 classes that extend from React.Component and have access to lifecycle methods.
// 2. function:- JavaScript functions. They can use Hooks to manage state and lifecycle events.
// 3. pure
// 4. higher order:- take a component and return a new component, adding additional props or behavior.
// 5. controlled
// 6. uncontrolled
