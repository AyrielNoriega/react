const personajes = ['Goku', 'Vegueta'];

const [ , p1] = personajes;

// console.log(p1);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

// console.log(letras)

const oseState = (valor) => {
    return [valor, () => {console.log('hola mundo');}]
}

const arr = oseState('Goku');
// console.log(arr);
//  arr[1]();

const [valor, setNombre] = oseState('Goku');

console.log(valor);
setNombre();

