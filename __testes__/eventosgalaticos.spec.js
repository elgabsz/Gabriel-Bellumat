const request = require('supertest');

test('Deve retornar erro 404 ao buscar um evento galáctico inexistente na rota /eventosgalaticos/1', async () => {
    const resposta = await request('https://swapi.dev/api').get('/eventosgalaticos/1/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toBeDefined();
});

