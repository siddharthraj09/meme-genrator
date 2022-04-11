import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    console.log("Component rendered")
    
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))
        
    // side effects
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
  


  //!https://reactjs.org/docs/hooks-effect.html

  import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    console.log("Component rendered")
    
    // side effects
    React.useEffect(function() {
        console.log("Effect ran")
        // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    })
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function



import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    console.log("Component rendered")
    
    /**
     * Challenge: re-write the useEffect
     * It should run any time `count` changes
     * For now, just console.log("Effect function ran")
     */
    React.useEffect(() => {
        console.log("Effect function ran")
    }, [count])// [0] compared to [0]
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


