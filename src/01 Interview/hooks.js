import React, { useEffect } from "react";
import { useState } from "react";
// A Hook is a special build-in function that lets you “hook into” React features.
// Hooks allow function components to have access to state and other React features.
// Registering sideEffect in fiber tree
// always start with use word
// we can make own custome hook😀

// Number of Hook in React18:-
// 15 hook are there
// 1.useState
// 2.useEffect
// 3.useReducer
// 4.useContext
// 5.useRef
// 6.useCallback
// 7.useMemo

// 8.useTransition
// 9.useDeferredValue
// 10.useLayoutEffect
// 11.useDebugValue
// 12.useImperativeHandle
// 13.useId
// 14.useInsertionEffect
// 15.useSyncExternalStore

// Rules of Hooks:-
// 1. Only call hook top level of function components
// 2. Do not call hook inside condition and loops, nested function or after early return
// 3. hook only be call inside the function components

// practical of rules No 2
// in fiber hook are orderly connected in linkedlist which you have learn in BCA. if any one of state remove so
// linkedlist will distroy and fiber did not create again that's why linkList will not create again then app will stop.😮

// example:-

const Theory = () => {
  // const [count, setCount] = useState(1);
  //   if (count <= 1) {
  //   /*eslint-disable*/
  //     const [result, setResult] = useState(true);
  //   }

  //   early return hence linkedlist distroy badly
  //   if (count > 2) {
  //     return <p>{count}</p>;
  //   }
  // useEffect(() => {
  //   console.log("RENDER ON MOUNT");
  // }, []);

  ////////////////////////////////////////////
  // const [state, setState] = useState(count > 1);
  // console.log(state);
  // state stay always false althought count is 2 hence state store it's initial value
  // then only be state update when setState will update or manualy like state = 2

  ///////////////////////////////////////////
  // state are asynchronous
  const [count, setCount] = useState(5);
  const [count1, setCount1] = useState(() => {
    return 0;
  });
  function change() {
    setCount(count + 5);
    setCount1(count);
    console.log(count);
  }
  console.log("h");
  return (
    <div>
      {count} <br />
      {count1}
      <button onClick={change}>click</button>
    </div>
  );
};

export default Theory;
