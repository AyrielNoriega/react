import { useState } from "react";

export const AppCategory = ({ setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue( event.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        setCategories(categories => [ ...categories, inputValue]);
        setInputValue('');
    }
    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ onInputChange }
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    );
}
