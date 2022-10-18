import heroes, {owners} from './data/heroes'

const getHeroes = (id) => {
     return heroes.find((heroe) => heroe.id === id);
}

// console.log(getHeroes(1));

const getHeroes2 = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}

console.log(getHeroes2('DC'));