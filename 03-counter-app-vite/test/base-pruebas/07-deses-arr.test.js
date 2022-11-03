import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => {
    test('debe retornar un string y un número', () => {
        const [ letters, numbers ] = retornaArreglo();
        //valido
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        //valido
        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );
        
        //valido
        expect( letters ).toEqual( expect.any(String) );
    })
})