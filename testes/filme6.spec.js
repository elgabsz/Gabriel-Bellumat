const request = require('supertest');

describe('Testes da API SWAPI para Filmes', () => {
    test('Deve visualizar informações do filme "Revenge of the Sith" com ID 6', async () => {
        const resposta = await request('https://swapi.dev/api').get('/films/6/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.title).toBe('Revenge of the Sith');
        expect(resposta.body.episode_id).toBe(3);
        expect(resposta.body.director).toBe('George Lucas');
        expect(resposta.body.producer).toBe('Rick McCallum');
        expect(resposta.body.release_date).toBe('2005-05-19');
        expect(resposta.body.opening_crawl).toContain('War! The Republic is crumbling');
        expect(resposta.body.characters.length).toBeGreaterThan(0);
        expect(resposta.body.planets.length).toBeGreaterThan(0);
        expect(resposta.body.starships.length).toBeGreaterThan(0);
        expect(resposta.body.vehicles.length).toBeGreaterThan(0);
        expect(resposta.body.species.length).toBeGreaterThan(0);
    });

    test('Deve retornar erro 404 ao buscar por um filme inexistente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/films/9999/');
        expect(resposta.status).toBe(404);
        expect(resposta.body.detail).toBe('Not found');
        expect(resposta.body).toMatchObject({
            detail: 'Not found'
        });
    });

    test('Deve verificar que o filme "Revenge of the Sith" possui informações definidas', async () => {
        const resposta = await request('https://swapi.dev/api').get('/films/6/');

        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty('title');
        expect(resposta.body).toHaveProperty('episode_id');
        expect(resposta.body).toHaveProperty('opening_crawl');
        expect(resposta.body).toHaveProperty('director');
        expect(resposta.body).toHaveProperty('producer');
        expect(resposta.body).toHaveProperty('release_date');
        expect(resposta.body).toHaveProperty('characters');
        expect(resposta.body).toHaveProperty('planets');
        expect(resposta.body).toHaveProperty('starships');
        expect(resposta.body).toHaveProperty('vehicles');
        expect(resposta.body).toHaveProperty('species');
    });
});
