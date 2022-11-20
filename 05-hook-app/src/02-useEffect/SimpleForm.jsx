import { useEffect, useState } from "react"


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'ayn@gmailc.com'
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [ name ] : value
        });
    }

    useEffect(() => {
        console.log('effect');
    }, []);

    useEffect(() => {
        console.log('effect formState');
    }, [formState]);

    useEffect(() => {
        console.log('effect formState email');
    }, [email]);


    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="Username@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
        </>
    )
}
