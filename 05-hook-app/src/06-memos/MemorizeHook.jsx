import { useMemo, useState } from "react";
import { UseCounter } from "../Hooks"

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahi vamos');
    }
    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemorizeHook = () => {

    const { counter, increment } = UseCounter(500);
    const [ show, setShow ] = useState(true)

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

    return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />

        <h4>{ memorizeValue }</h4>

        <button
            className="btn btn-primary m-1"
            onClick={ () => increment() }
        >
            +1
        </button>

        <button
            className="btn btn-primary"
            onClick={ () => setShow( !show ) }
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    </>
    )
}
