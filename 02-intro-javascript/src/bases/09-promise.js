import { getHeroes } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {

//     setTimeout( () => {
//         const heroes = getHeroes(1);
//         //console.log(heroes);
//         resolve(heroes);
//         //reject('tenemos error');
//     }, 2000);

// });

// promesa
//     .then( (heroes) => {
//         console.log('2 seg después', heroes);
//     })
//     .catch((err) => {
//         console.warn(err);
//     })


///////////////////////////////////////////

const getHeroesByIdAsyc = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout( () => {
            const heroes = getHeroes(id);
            // console.log(heroes);
            if (heroes) {
                resolve(heroes); //llama el then
            } else {
                reject('tenemos error'); //llama al cach
            }
            
        }, 2000);
    
    });
}

getHeroesByIdAsyc(1)
    .then( heroe => console.log(heroe))
    .catch( err => console.warn(err))
    //.catch( console.warn ) //esto es igual que la línea anterior