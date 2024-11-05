const request = require('supertest');

describe('Testes da API SWAPI', () => {
    test('Deve visualizar informações de C-3PO ao buscar por um personagem existente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/people/2/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.name).toBe('C-3PO');
        expect(resposta.body.height).toBe('167');
        expect(resposta.body.mass).toBe('75');
        expect(resposta.body.hair_color).toBe('n/a');
        expect(resposta.body.skin_color).toBe('gold');
        expect(resposta.body.eye_color).toBe('yellow');
        expect(resposta.body.birth_year).toBe('112BBY');
        expect(resposta.body.gender).toBe('n/a');
        expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/1/');
        expect(resposta.body.films).toBeDefined();
        expect(resposta.body.films.length).toBeGreaterThan(0);
        expect(resposta.body.species).toBeDefined();
        expect(resposta.body.species.length).toBe(1);
    });

    test('Deve retornar erro 404 ao buscar por um personagem inexistente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/people/9999/');
        expect(resposta.status).toBe(404);
        expect(resposta.body.detail).toBe('Not found');
        expect(resposta.body).toMatchObject({
            detail: 'Not found'
        });
    });

    test('Deve verificar que C-3PO está presente em pelo menos 6 filmes', async () => {
        const resposta = await request('https://swapi.dev/api').get('/people/2/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.films.length).toBe(6);
    });
});
