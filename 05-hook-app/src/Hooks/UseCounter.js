import { useState } from "react"


export const UseCounter = (initialValue = 10) => {
    const [ counter, setcounter ] = useState(initialValue)

    return {
        counter
    }
}
