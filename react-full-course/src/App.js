import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react'


// How to write components:
const MyArrowedComponent = () => { // arrow functional component
  return(
    <p>🔥 Hello</p>
  );
}

function MyFuntionComponent() { //  functional component
  return <p>🔥 Hello</p>;
}

const MyComponent = (props /* {name}*/) => { // Passing data through props
  return(
    <p>🔥 Hello {props.name /*{name}*/}</p>
  );
}

// ----------------------------------------------------------------

// Conditional rendereing:
const Conditional = ({count}) => { // if/else conditional rendering
  if (count > 5) {
    return <h1> Count is greater than 5</h1>;
  } else {
    return <h1>Count is less than 5</h1>;
  }
}

const ConditionalLogicalAnd = ({count}) => { // Logical "and" conditional rendering

  // OBS: braces will just work if wrapped in some jsx tag or component, otherwise it won't render
  // use the fragment syntax (<></>) to tell react that this component will render
  // inside anoter jsx tag or component.

   //WARNING: empty strings and zeros evalates "false" in JS
  // give preference to Ternary rendering
  return (
    <>
      {
        count > 5 &&
          <h1> Count is greater than 5</h1>
      }
        {/* the above one and the underneath one are Both the same */}
      {
        count > 5
          ? <h1> Count is greater than 5</h1>
          : null
      }
    </>
  );
}

const Ternary = ({count}) => { // Ternary conditional rendering
  return (
    <>
      {
        count % 2 === 0
          ? <h1>Ternary count is even</h1> 
          : <h1>Ternary count is odd</h1> 
      }
    </>
  );
}

// ----------------------------------------------------------------

// loop rendering
const ListOfAnimals = () => {
  const data = [
    { id: 1436452, name: 'Fido 🐕' },
    { id: 2534527, name: 'Snowball 🐈' },
    { id: 3345125, name: 'Murph 🐈‍⬛' },
    { id: 4234621, name: 'Zelda 🐈' },
  ];

  // const data2 = [
  //   3,5,1,6,2
  // ];

  return (
    <ul>
      {
        data &&
          data.map( ({id, name}) => {
            return <li key={id}>{name}</li>
          } )
      }
    </ul>
  );

  // return ( // Looping through an array
  //   <ul>
  //     {
  //       data &&
  //       data2.map( (element, index) => {
  //           return <li key={index}>{element}</li>
  //         } )
  //     }
  //   </ul>
  // );
}

// ----------------------------------------------------------------

// Event hadling
const Events = () => {
  return <button onClick={(event) => console.log(event)}>Click</button>
} 

const clickHandler = (event) => {
   console.log(event);
 }

//  const clickHandler2Arguments = (event, foo) => {
//   console.log(event);
// }


const EventsWithHandler = () => {
  return <button onClick={clickHandler /* (e) =>clickHandler2Arguments(e, 23) */}>Click</button>
} 

// ----------------------------------------------------------------

// State management
const Stateful = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Stateful</h1>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

const StatefulObject = () => {
  const [state, setState] = useState({count: 0, user: 'Jeffey'});

  const handleClick = () => {

    // setState rewrite the entire object, so you have to use the spread syntax (...)
    // to set the old state and update the desire property
    setState({ 
      ...state,
      count: state.count + 1,
    });
  }

  return(
    <>
      <h1>StatefulObject</h1>
      <p>Count: {state.count}</p>
      <p>User: {state.user}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

// "useReducer" is usually used rather than "useState" when you have
// a complex state logic management that is evolved in multiple sub-values
// or when the next state depends on the last one
const initialState = {count: 0, name: 'Jeffey'};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    case 'reset':      
      return {...state, count: 0};   
    default:
      throw new Error();
  }
}

function ReducerState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>ReducerState</h1>
      <p>Counter: {state.count}</p>
      <p>Name: {state.name}</p>
      <button
        onClick={() => dispatch({type: 'reset', payload: 0})}>
        Reiniciar
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

// Lazy reducer is a way to extract the logic of initializing the state away
// from the reducer function, this allow us to do things such as reseting the
// the state to its initial form, or initializing it with an API call everytime
// the pages reload.

// this function will initialize the state
const init = (initialCount) => { 
  return {
    count: initialCount,
    name: "Jeffey"
  }
}

const LazyReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    case 'reset':      
      return init(action.payload);    
    default:
      throw new Error();
  }
}

const LazyReducerCount = ({initialCount}) => { 
  // the third argument, the init function is used by the useReducer function
  // like: init(initialCount)
  const [state, dispatch] = useReducer(LazyReducer, initialCount, init);  
  
  return (
    <>
      <h1>LazyReducer</h1>
      <p>Contador: {state.count}</p>
      <p>Name: {state.name}</p>
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reiniciar
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit  <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MyComponent name={`JeffD ` + 23 /* use braces to pass a JS expression but not statement */}/>
        <Ternary count={ 22 }/>
      <Conditional count={ 22 }/>
      <ListOfAnimals />
      <p>---------------------------</p>
      <Stateful />
      <p>---------------------------</p>
      <StatefulObject />
      <p>---------------------------</p>
      <ReducerState />
      <p>---------------------------</p>
      <LazyReducerCount initialCount={10}/>
      <p>---------------------------</p>
    </div>
  );
}

export default App;
