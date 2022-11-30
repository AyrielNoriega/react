import { useRef } from "react";


export const FocusScreen = () => {

    const inputRef = useRef()
    console.log(inputRef);

    const onClick = () => {
        console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus</h1>
            <hr />

            <input
                className="form-control"
                placeholder="Ingrese su nombre"
                ref={ inputRef }
                type="text"
            />

            <button
                onClick={ onClick }
                className="btn btn-primary mt-2"
            >
                Set Focus
            </button>
        </>
    )
}
