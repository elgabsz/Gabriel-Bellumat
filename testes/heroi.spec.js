const request = require('supertest');

test('Deve retornar erro 404 ao buscar herói inexistente na rota /heroes/1', async () => {
    const resposta = await request('https://swapi.dev/api').get('/heroes/1/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toBeDefined();
});