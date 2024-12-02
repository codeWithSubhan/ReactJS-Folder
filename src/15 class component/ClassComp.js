import React from "react";
import "./style.css";
// before 2019 we use javascript class not javascript function
// Before React 16.8, Class components were the only way to track state and lifecycle on a React component.
// Function components were considered "state-less".
// With the addition of Hooks, Function components are now almost equivalent to Class components

// Class Component
// 1. Rect.component give render method to return JSX
// 2. constructor() function will be called when the component gets initiated.
// inheritance of the parent component by including the super() statement, which executes the parent component's
// constructor function, and your component has access to all the functions of the parent component (React.Component).

// different btw function component vs class component
// component            function                                    class
// Introduce            v16.8(2019 with hook)                       v0.13(2015)
// create               JS Function                                 Es6 class opps
// Read props           destructing or props.x                      this.props.x
// state                useState() hook                             this.setState()
// LifeCycle            useEffect() hook                            componentDidMount(), componentDidUpdate(), componentWillUnmount()
// Event handler        function                                    class methods
// return JSX           from function                               from render() method
// Advantage           1. no need of this keyword                   LifeScycle easy to understand
//                     2. clean code, easy to understand
//                     3. less code useEffect
//
export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDec = this.handleDec.bind(this);
    this.handleInc = this.handleDec.bind(this);
  }
  handleInc() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  handleDec() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }
  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDec}>-</button>
        <span className="span">
          {date.toDateString()}
          {"...."} [{this.state.count}]
        </span>
        <button className="button" onClick={this.handleInc}>
          +
        </button>
      </div>
    );
  }
}
