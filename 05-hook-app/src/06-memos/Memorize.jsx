import { useState } from "react";
import { UseCounter } from "../Hooks"
import { Small } from "./Small";


export const Memorize = () => {

    const { counter, increment } = UseCounter(1);
    const [ show, setShow ] = useState(true)
    return (
    <>
        <h1>Counter: <Small counter={ counter } /></h1>
        <hr />

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
