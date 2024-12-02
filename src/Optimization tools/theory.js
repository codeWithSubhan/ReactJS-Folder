// PERFORMANCE OPTIMIZATION TOOLS

// 1. RREVENT WASTED RENDERS
// memo function
// useMemo
// useCallback
// padding element as children and regular props

// 2. improve speed/responsiveness
// useMemo
// useCallback
// useTransition

// 3. reduce bundle size
// using fewer 3rd party package
// code splitting and lazy loading

// component get re-render in only 3 situation
// 1. state change
// 2. context change
// 3. parent comp change it all child get re-render

// MEMORIZATION: Optimiazation technique that execute pure func once, and save the result in memory, if again func run with same
// arguement it return previsou saved result wihtout executing func again

// Memorize comp with memo
// Memorize object with useMemo
// Memorize function with callback
// hence RREVENT WASTED RENDERS AND improve speed/responsiveness

// memo function:
// 1. used to create comp that wil not re-render when it's  parent re-render, as long as the props stay same btw renders
// 2. memorized comp still change when it's own state change context that subsribe to change
// 3. only make sence when comp heavy(slow rendering),re-renders often and does with same props

// issue with memo
// if we pass object or function memo assume it new them re-render comp why is it happend
// 1. in react everything is re-create on every re-render including object and func
// 2. in javasript tow object and func are look same still both are different ({}!={})
// 3. if object and func pass as a props the child comp see them as new props on each re-render
// 4. if props are different memo doesn't work
// hence react give soluation by giving useMemo and useCallback hook

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

// Note:- React team making a compiler to add feature of memo useMemo useCallback by default so thingking about remove these hooks
// only use when heavy slow comp

// BUNDLE & CODE SPLITTING:
// USER SIDE:
// Bundle: Javascript file containging the entire apllication code. Downloading the bundle will load the enire application at once, turning to single page application
// Bundle size:  the more size  the more take time to download bundle  to execute  application in client side atonce or initalState
// Notes:- create-react-app and vite provide webpack which bundle all code in hug bundle

// DEVELOPER SIDE:
// code splitting:
// splitting bundle into multiple parts that can be downloaded over time to time as user need("lazy loaded")

// EXPLAINATION:
// 1. Let suppose you made a app on reactJS right and build a hug bundle by webpack and hoisted to server
// 2. whenever user request to that app by URL on browser simply server response by giving Bundle which contain all application
// code called bundle and this one hug bundle has to be download client side before start application it is done only initial load hence then user go another page the browser did not request again because
// browser has already all code to execute on it's client side hence application did not reload hence application became a single page application 😮 DIDN'T YOU KNOW😄
// 3. but downloading a hug bundle it take long time to download all javascript files at once so rather than making hug
// bundle code splitting tachnique simply split hug file or bundle into multple javascript file so that as per user need each
// file download each need atOnce called lazy loading
