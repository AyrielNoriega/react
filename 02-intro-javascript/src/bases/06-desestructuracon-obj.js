//Desestructuración
//asignacion desestructurante

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const { nombre } = persona;

// console.log(nombre);

const retornaPersona = ({nombre, edad,  rango = 'Capitan'}) => {
    console.log(nombre, edad,  rango);
}

retornaPersona(persona);

const contexto = ({clave, nombre, edad,  rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.666,
            lng: -12.2323
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = contexto(persona);

console.log(nombreClave, lat);