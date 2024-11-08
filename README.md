Os códigos enviados consistem em testes automatizados para a API SWAPI, que fornece dados sobre o universo de Star Wars. No primeiro teste, é feita uma requisição GET para
obter informações sobre o veículo "Sand Crawler" (ID 4). O objetivo é verificar se a API retorna corretamente os detalhes desse veículo, incluindo seu nome, modelo,
fabricante, capacidade de carga, entre outros. O segundo teste testa o comportamento da API ao buscar um veículo que não existe, com o ID 9999. A expectativa é que a API
retorne um erro 404, indicando que o recurso não foi encontrado. Isso verifica a correta implementação do tratamento de erros para recursos ausentes. O terceiro teste
confirma que a resposta para o veículo "Sand Crawler" inclui todas as propriedades esperadas, como name, model, cost_in_credits, e outras.

Esses testes são fundamentais para garantir que a API funcione conforme esperado em diferentes cenários. O primeiro cenário valida a integridade das respostas da API para 
recursos existentes, enquanto o segundo garante que a API lida corretamente com erros quando um recurso não é encontrado. Já o terceiro teste assegura que a estrutura da 
resposta está correta, com todos os campos necessários. Essa abordagem de testes é essencial para assegurar que a API seja confiável e robusta, oferecendo dados consistentes
e tratando erros de forma adequada, o que é crucial para o funcionamento de sistemas que dependem dessa API.
