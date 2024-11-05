const request = require('supertest');

describe('Testes da API SWAPI para Star Destroyer', () => {
    test('Deve visualizar informações da nave estelar Star Destroyer com ID 3', async () => {
        const resposta = await request('https://swapi.dev/api').get('/starships/3/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.name).toBe('Star Destroyer');
        expect(resposta.body.model).toBe('Imperial I-class Star Destroyer');
        expect(resposta.body.manufacturer).toBe('Kuat Drive Yards');
        expect(resposta.body.cost_in_credits).toBe('150000000');
        expect(resposta.body.length).toBe('1,600');
        expect(resposta.body.max_atmosphering_speed).toBe('975');
        expect(resposta.body.crew).toBe('47,060');
        expect(resposta.body.passengers).toBe('n/a');
        expect(resposta.body.cargo_capacity).toBe('36000000');
        expect(resposta.body.consumables).toBe('2 years');
        expect(resposta.body.hyperdrive_rating).toBe('2.0');
        expect(resposta.body.MGLT).toBe('60');
        expect(resposta.body.starship_class).toBe('Star Destroyer');
    });

    test('Deve retornar erro 404 ao buscar por uma nave inexistente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/starships/9999/');
        expect(resposta.status).toBe(404);
        expect(resposta.body.detail).toBe('Not found');
        expect(resposta.body).toMatchObject({
            detail: 'Not found'
        });
    });

    test('Deve verificar que a nave estelar Star Destroyer possui informações definidas', async () => {
        const resposta = await request('https://swapi.dev/api').get('/starships/3/');

        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty('name');
        expect(resposta.body).toHaveProperty('model');
        expect(resposta.body).toHaveProperty('manufacturer');
        expect(resposta.body).toHaveProperty('cost_in_credits');
        expect(resposta.body).toHaveProperty('length');
        expect(resposta.body).toHaveProperty('max_atmosphering_speed');
        expect(resposta.body).toHaveProperty('crew');
        expect(resposta.body).toHaveProperty('passengers');
        expect(resposta.body).toHaveProperty('cargo_capacity');
        expect(resposta.body).toHaveProperty('consumables');
        expect(resposta.body).toHaveProperty('hyperdrive_rating');
        expect(resposta.body).toHaveProperty('MGLT');
        expect(resposta.body).toHaveProperty('starship_class');
    });
});
