// MEMORIZATION: Optimiazation technique that execute pure func once, and save the result in memory, if again func run with same
// arguement it return previsou saved result wihtout executing func again

// Memoize comp with memo
// Memoize object with useMemo
// Memoize function with callback

// memo:
// 1. used to create comp that wil not re-render when it's  parent re-render, as long as the props stay same btw renders
// 2. memoized comp still change when it's own state change context that subsribe to change
// 3. only make sence when comp heavy(slow rendering),re-renders often and does with same props

// useMemo and useCallback hook:
// 1. used to memoize value(useMemo) and function(useCallback) btw renders
// 2. value passed into useMemo and useCallback will be stored in memorey(catch) and return as along as dependency stay same else return newly value
// 3. both hook have dependency array whenever one dependency change the value will be created

// useMemo
// memoize object
// useMemo memoize by calling callback function means storing result by calling func again and again

// useCallback
// memoize function that are (setter are already memoize like state)
// useCallback memoize callback function

import React, { memo, useCallback, useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const data = useMemo(() => {
    return {
      count,
      title: "memo component",
    };
  }, [count]);

  const handleCount = useCallback(function handleCount() {
    setCount((prev) => prev + 1);
  }, []);
  const data1 = { name: "John", age: 42 };

  console.log(JSON.stringify(data1, null, 2));
  console.log(React.version);
  return (
    <>
      <pre>{JSON.stringify(data1, 20)}</pre>;
      <center>
        <h1>{count}</h1>
        <button onClick={handleCount}>Click</button>
        <MemoFunction
          title="memo component"
          // data={data}
          // handleFunction={handleCount}
        />
      </center>
    </>
  );
}

const MemoFunction = memo(function MemoFunction({ title }) {
  console.log(title);
  return <p>{title}</p>;
});
