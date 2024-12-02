// MEMORIZATION: Optimiazation technique that execute pure func once, and save the result in memory, if again func run with same
// arguement it return previsou saved result wihtout executing func again

// Memorize comp with memo
// Memorize object with useMemo
// Memorize function with callback

// memo:
// 1. used to create comp that wil not re-render when it's  parent re-render, as long as the props stay same btw renders
// 2. memorized comp still change when it's own state change context that subsribe to change
// 3. only make sence when comp heavy(slow rendering),re-renders often and does with same props

// useMemo and useCallback hook:
// 1. used to memorize value(useMemo) and function(useCallback) btw renders
// 2. value passed into useMemo and useCallback will be stored in memorey(catch) and return as along as dependency stay same else return newly value
// 3. both hook have dependency array whenever one dependency change the value will be created

// useMemo
// memorize object
// useMemo memorize by calling callback function means storing result by calling func again and again

// useCallback
// memorize function that are (setter are already memorize like state)
// useCallback memorize callback function
