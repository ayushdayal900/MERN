import React from "react";
import { useState,
    useEffect

 } from "react";

function CounterComponent () {

    const [count, setCount] = useState(1);
    const val = count %2 == 0? 'even' : 'odd'
    
    
    // [] : dependency array
    // [] null : runs only when compo is mounted
    // [a, b]  : runs when states a or b changes

    useEffect( ()=> {
        console.log('Counter componenet is mounting')
    }, [])
    
    useEffect( ()=> {
        console.log('Counter is updated.')
    }, [count])

    return (
        <div>
            <p>Count Component - {count}</p>
            <p>value is : {val}</p>
            <button onClick={() => setCount(count+1)}> Increment </button>
            <button onClick={() => setCount(count-1)}> Decrement </button>
        </div>
    );
};

export default CounterComponent;