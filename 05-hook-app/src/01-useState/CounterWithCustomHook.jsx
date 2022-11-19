import { UseCounter } from "../Hooks/UseCounter"


export const CounterWithCustomHook = () => {

    const { counter } = UseCounter();

    return (
        <>
            <h1>Counter With Hook: { counter }</h1>
            <button className="btn btn-primary">+1</button>
            <button className="btn btn-primary">reset</button>
            <button className="btn btn-primary">-1</button>
        </>
    )
}
