const nombre = 'Ayriel';
const apellido = 'Noriega';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function get_saludo(nombre) {
    return 'hola ' + nombre;
}

console.log(`Este es un texto: ${get_saludo(nombre)}`);