import { useState } from "react"

export const CounterApp = () => {
    const [ state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const { counter1, counter2, counter3 } = state;

    return (
    <>

        <div>CounterApp: { counter1 }</div>
        <div>CounterApp: { counter2 }</div>
        <div>CounterApp: { counter3 }</div>
        <hr />
        <button onClick={ () => setCounter( {
                    ...state,
                    counter1: counter1 + 1,
                } ) }
        >+1</button>
    </>
    )
}
