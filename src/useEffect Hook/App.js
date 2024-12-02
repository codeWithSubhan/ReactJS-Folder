// import React, { useEffect, useState } from "react";
// Components(Instance) Lifecycle:
// Every React component goes through the same lifecycle:
// Three phases:-
// 1.MOUNT
// 2.RE-RENDER OR UPDATE
// 3.UNMOUNT

// 1.MOUNT:
// component instace render first time or can say a comp born👶
// Fresh state and props are created

// 2.UPDATE OR RE-RENDER 🔃
// RE-RENDER happen whenever
// state change
// props change
// parent re-render
// content change

// 3.UNMOUNT
// comp instance distroy or remove
// also destroye state and props

// All function are available in class compoenent but not before in function component but have hooks😎
// All three phasees can handle by useEffect😂

// Fetching Api:
// never fetch data or write sideEffect in render logic it will go infinity loop🤔

// useEffect:
// 1.sideEffect can be handle by eventHandler func and useEffect
// 2.ALlow us to write code that will run at different moment
// 3.MOUNT, RE-RENDER, UNMOUNT
// 4.useEffect like a an EventListner that listening for one dependency to change, whenever dependecy
// it will execute the effect again
// 5.Effect react to update to state props used inside the effect(the dependencies).So Effects are reactive
// like state updates re-render ui
// 6.useEffect returns undefined.

// useEffect Dependency Array:-
// syntax: useEffect(setup, dependencies?)
// 1. By Default effects run after every render we can prevent that by Giving second argument as a Dependency array
// 2. Each time dependency change the effect will be execute again
// 3. Every state variable, and props used inside the effect must include in dependency array
// 4. useEffect(func,[x,y,z],[]) if all of dependency doesn't change so effect will not execute and if there is no
// dependency then effect is synchronize with every state of this comp means effect will run on every re-render

// useEffect CleanUp function
// 1. func can return from effect
// 2. execute two times
// Before effect execute again
// when comp unmounted
// 3. this cleanup when sideeffect keep running after re-render or unmounted
// Note: use one sideEffect it easy ito cleanup func

// useEffect Synchronization mechanism
// 1.sideEffect can be handle by eventHandler func and useEffect
// 2.effect sync with outside of state props and sideEffect in order to upate data synchronizly
// 3.useEffect is synchronize with external file System(sideEffect)
// 4.Effect and component lifcycle are deep connected as both execute on state and props state

// useEffect Execute
// effect only be executed after the Browser painted UI DID YOU SOCKED😲
// That's why we say effect run asynchronously it happens because effect take long time to complete
// There is useLayoutEffect which use to execute before Browser paint on screen Don't use this⚠

// KNOW MORE ABOT USEEFFECT DEPENDENCY ARRAY RULES
// DEPENDENCY ARRAY RULES
// 1 every state, props, context value used inside the effect must be in dependency array otherwise stale closure problem occurs
// 2. all reactive value must in include! that means any function or variable that reference any other reactive value
// 3. Do not use object and array as dependency becuase both are recreated on each render then effect will see new dependency
// and run although both values are do not change anymore

// Notes:-
// stale closure: The stale closure problem occurs when a closure captures outdated variables. An efficient way to solve
// stale closures is to correctly set the dependencies of React hooks
// reactive value: state, props, context value or any other value that reference a reactive value
// means whosever change time to time like state are reactive value or all value that somehow connected to props,state,context value are reactive value

// When not to use effect
// 1. Response to user event use function instead of effect
// 2. fetching data use Library React Query but for small app effect is fine not bad
// 3. use drive state or event handler to setting state based on another state variable instead of effect
// as much as possible do not use useffect anymore

// PRIACTICE:
// function App() {
//   const [count, setCount] = useState(0);

//   console.log("RENDER 1");

//   useEffect(function () {
//     console.log("render of every state update");
//   });

//   useEffect(() => {
//     setCount(count + 1);
//     console.log("count:", count);
//     // it's also run on mount but also run on dependency update
//   }, []);

//   useEffect(
//     function () {
//       console.log("Render only MOUNT", count);
//     },
//     [count]
//   );

//   function handleCount() {
//     setCount(count + 1);
//   }

//   console.log("RENDER 2");

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleCount}>Click HERE</button>
//     </div>
//   );
// }

// export default App;
