import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeId debe retornar un héroe', () => {
            const id = 1;
            const hero = getHeroeById(id);
            
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
    })

    test('getHeroeId debe retornar un héroe', () => {
            const id = 100;
            const hero = getHeroeById(id);

            expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un heroes dc', () => {
            const owner = 'DC';
            const heros = getHeroesByOwner(owner);

            expect( heros.length ).toBe( 3 );

            expect(heros).toEqual([
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]);

            expect(heros).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    })

    test('getHeroesByOwner debe retornar un heroes Marvel', () => {
            const owner = 'Marvel';
            const heros = getHeroesByOwner(owner);

            expect( heros.length ).toBe( 2 );

            expect(heros).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    })
})