// useRef return Reference(Ref) which is object with mutable .current that is persisted
// across renders (normal variable are always reset)
// we can write read from the ref using .current

// Tow cases:-
// 1. creating vairable stay same btw renders
// 2. selecting and storing DOM Element

// Refs are for Data that is not a render: usually appear in event handler or effect
// it can be using in jsx but use state instead
// Do not read write .current in lenger logic (like state )

// different state vs Ref
// 2. state and ref both store data
// 1. state update comp re-render but not Ref
// 3. state are immutable but not Ref
// 4. state are asynchronous but not Ref hence store it's prev data

// variable vs ref
// both did not create re-render after update
// both are synchronous
// both are muttable
// both are access it's current updated value
// every re-rencer variables are reset but ref hold it's data
