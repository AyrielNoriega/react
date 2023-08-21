import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const {isLoading, pokemons = [], page} = useSelector( state => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons());

    }, [])

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True': 'False'}</span>
            <ul>
                {pokemons.map((poke, index) => (
                    <li key={index}>
                        <span>{poke.name} </span>
                        <a href={poke.url}>url</a>
                    </li>
                ))}
            </ul>
            <button
                disabled={isLoading}
                onClick={ () => dispatch(getPokemons(page))}
            >next</button>
        </>
    )
}
