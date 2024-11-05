const request = require('supertest');

describe('Testes da API SWAPI para Veículos', () => {
    test('Deve visualizar informações do veículo Sand Crawler com ID 4', async () => {
        const resposta = await request('https://swapi.dev/api').get('/vehicles/4/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.name).toBe('Sand Crawler');
        expect(resposta.body.model).toBe('Digger Crawler');
        expect(resposta.body.manufacturer).toBe('Corellia Mining Corporation');
        expect(resposta.body.cost_in_credits).toBe('150000');
        expect(resposta.body.length).toBe('36.8 ');
        expect(resposta.body.max_atmosphering_speed).toBe('30');
        expect(resposta.body.crew).toBe('46');
        expect(resposta.body.passengers).toBe('30');
        expect(resposta.body.cargo_capacity).toBe('50000');
        expect(resposta.body.consumables).toBe('2 months');
        expect(resposta.body.vehicle_class).toBe('wheeled');
    });

    test('Deve retornar erro 404 ao buscar por um veículo inexistente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/vehicles/9999/');
        expect(resposta.status).toBe(404);
        expect(resposta.body.detail).toBe('Not found');
        expect(resposta.body).toMatchObject({
            detail: 'Not found'
        });
    });

    test('Deve verificar que o veículo Sand Crawler possui informações definidas', async () => {
        const resposta = await request('https://swapi.dev/api').get('/vehicles/4/');

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
        expect(resposta.body).toHaveProperty('vehicle_class');
    });
});
