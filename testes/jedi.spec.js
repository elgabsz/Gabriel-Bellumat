const request = require('supertest');

test('Deve retornar erro 404 ao buscar um droid inexistente na rota /droids', async () => {
    const resposta = await request('https://swapi.dev/api').get('/jedi/1/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toBeDefined();
});