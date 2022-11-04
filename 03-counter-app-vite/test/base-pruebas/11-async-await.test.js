import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas sobre 11-async-await', () => {
    test('getImagen debe retornar URL de la imagen', async() => {
        const url = await getImagen();
        console.log(url);
        expect( typeof url ).toBe('string');
    })
})