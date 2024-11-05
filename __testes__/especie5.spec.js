const request = require('supertest');

describe('Testes da API SWAPI para Espécies', () => {
    test('Deve visualizar informações da espécie Hutt com ID 5', async () => {
        const resposta = await request('https://swapi.dev/api').get('/species/5/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.name).toBe('Hutt');
        expect(resposta.body.classification).toBe('gastropod');
        expect(resposta.body.designation).toBe('sentient');
        expect(resposta.body.average_height).toBe('300');
        expect(resposta.body.skin_colors).toBe('green, brown, tan');
        expect(resposta.body.hair_colors).toBe('n/a');
        expect(resposta.body.eye_colors).toBe('yellow, red');
        expect(resposta.body.average_lifespan).toBe('1000');
        expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/24/');
        expect(resposta.body.language).toBe('Huttese');
    });

    test('Deve retornar erro 404 ao buscar por uma espécie inexistente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/species/9999/');
        expect(resposta.status).toBe(404);
        expect(resposta.body.detail).toBe('Not found');
        expect(resposta.body).toMatchObject({
            detail: 'Not found'
        });
    });

    test('Deve verificar que a espécie Hutt possui informações definidas', async () => {
        const resposta = await request('https://swapi.dev/api').get('/species/5/');

        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty('name');
        expect(resposta.body).toHaveProperty('classification');
        expect(resposta.body).toHaveProperty('designation');
        expect(resposta.body).toHaveProperty('average_height');
        expect(resposta.body).toHaveProperty('skin_colors');
        expect(resposta.body).toHaveProperty('hair_colors');
        expect(resposta.body).toHaveProperty('eye_colors');
        expect(resposta.body).toHaveProperty('average_lifespan');
        expect(resposta.body).toHaveProperty('homeworld');
        expect(resposta.body).toHaveProperty('language');
    });
});
