import { useState } from "react"


export const UseCounter = (initialValue = 10) => {
    const [ counter, setcounter ] = useState(initialValue)

    const increment = ( value = 1 ) => {
        setcounter( counter + value);
    }

    const decrement = ( value = 1 ) => {
        setcounter( counter - value );
    }
    const reset = (e) => {
        console.log(e);
        setcounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
