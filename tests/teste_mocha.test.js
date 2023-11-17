var arquivoGet = require('../servico/todos_metodos_get');

describe("#Suite de testes automatizados para uma API", () => {
    setTimeout(() => {

    }, 20000)
    context("Todos os códigos de get", () => {
        it("CE01: quando realizar consulta geral, todos registros deve ser listados", (done) => {
            arquivoGet.metodoRetornaGet('/posts', 200, done)
        })
    })
    context("Outro get", () => {
        it("CE01: quando realizar consulta geral, todos registros deve ser listados", (done) => {
            arquivoGet.metodoRetornaGet('/posts/4', 200, done)
        })
    })
    context("Retorna erro", () => {
        it("CE01: quando realizar consulta geral, todos registros deve ser listados", (done) => {
            arquivoGet.metodoRetornaGet('/post', 404, done)
        })
    })
});
