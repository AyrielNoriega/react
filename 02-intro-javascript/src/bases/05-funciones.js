//funciones en js

// function saludar (nombre)
// {
//     return `Hola ${nombre}`;
// }

const saludar = function (nombre) {
    return `Hola ${nombre}`;
}


const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_mostro123'
    }
}

//los parentesis indican que quiero regresar el objeto de manera implicita.
const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_mostro123'
    });

console.log(getUser2());