//arreglos en js

// const arreglo = new Array(20);
const arreglo =  [1,2,3,4,5];
//arreglo.push(1); //no es recomendable utilizar push ya que modifica  el objeto principal

const arreglo2 =  [0, ...arreglo];

const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
});
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);