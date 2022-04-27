# Micro State Management with React Hooks

<a href="https://www.packtpub.com/product/micro-state-management-with-react-hooks/9781801812375"><img src="https://static.packt-cdn.com/products/9781801812375/cover/smaller" alt="Micro State Management with React Hooks" height="256px" align="right"></a>

This is the code repository for [Micro State Management with React Hooks](https://www.packtpub.com/product/micro-state-management-with-react-hooks/9781801812375), published by Packt.

**Explore custom hooks libraries like Zustand, Jotai, and Valtio to manage global states**

## What is this book about?
State management is one of the most complex concepts in React. Traditionally, developers have used monolithic state management solutions. Thanks to React Hooks, micro state management is something tuned for moving your application from a monolith to a microservice.

This book covers the following exciting features: 
* Understand micro state management and how you can deal with global state
* Build libraries using micro state management along with React Hooks
* Discover how micro approaches are easy using React Hooks
* Understand the difference between component state and module state
* Explore several approaches for implementing a global state

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1801812373) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter02.

The code will look like the following:
```
const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </div>
  );
};

```

**Following is what you need for this book:**
If you're a React developer dealing with complex global state management solutions and want to learn how to choose the best alternative based on your requirements, this book is for you. Basic knowledge of JavaScript programming, React Hooks and TypeScript is assumed.

With the following software and hardware list you can run all code files present in the book (Chapter 1-11).

### Software and Hardware List

| Chapter  | Software required                   | OS required                        |
| -------- | ------------------------------------| -----------------------------------|
| 1-11        |            Node 14                          | Windows, Mac OS X, and Linux (Any) |
| 1-11        | React 17/create-react-app 4             | google chrome |
| 1-11       | ECMAScript 2015/TypeScript 4             |  |

### Related products <Other books you may enjoy>
* Simplify Testing with React Testing Library [[Packt]](https://www.packtpub.com/product/simplify-testing-with-react-testing-library/9781800564459) [[Amazon]](https://www.amazon.com/dp/1800564457)

* Designing React Hooks the Right Way [[Packt]](https://www.packtpub.com/product/designing-react-hooks-the-right-way/9781803235950) [[Amazon]](https://www.amazon.com/dp/1803235950)
  
## Errata  
 * Page 151 (code snippet 3 ,line 1):  **const Counter = ({ countAtom }) => {** _should be_ **const Counter = () => {**
 * Page 59 (Paragraph 3, line 2): **This is because Contexts hold only primitive values.** Should be ignored and removed which is wrong explanation of the code.
 * Page 37 (code snippet 3, line 13): **console.log(container1.addBase(2)); // shows "3"** Should be **console.log(container1.addBase(2)); // shows "12"**.
 * Page 37 (code snippet 3, line 14): **console.log(container1.addBase(2)); // shows "12"** Should be **console.log(container1.addBase(2)); // shows "3"**.
 * Page 14 (code snippet 1, line 3): **onClick={() => { state.count = 1; setState(state); }** Should be **onClick={() => { state.count = 1; setState(state); }}**.
 * Page 21 (code snippet 2, line 2): **typeof action === 'function' ? action(prev): prev;** Should be **typeof action === 'function' ? action(prev): action;**.
 * Page 23 (code snippet 1, line 14): **return [state, dispatch];** Should be 
  ```
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch(1)}>+1</button>
    </div>
  );
  ```
 * Page 22 (code snippet 2, line 2): **const reducer = (prev, delta) => prev + delta** Should be **const reducer = (prev, delta) => ({ ...prev, count: prev.count + delta })**
 * Page 23 (code snippet 1, line 3): **{state}** Should be **{state.count}**
 * Page 163 (code snippet 2 ,line 3):  **const incrementCountAtom(** Should be **const incrementCountAtom = atom(**
 * Page 20 (Paragraph 1, line 2): **takes a second argument---`initialArg`--in useReducer** should be **takes an argument---`initialArg`--, which is the second argument from useReducer**. 

## Get to Know the Author
**Daishi Kato**
is a software engineer who is passionate about open-source software. He had been a researcher on peer-to-peer networks and web technologies for decades. His interest has been in engineering, and he has been working with startups for the last 5 years. He has been actively involved in OSS since the ’90s, and his latest work focuses on developing various libraries with JavaScript and React.
