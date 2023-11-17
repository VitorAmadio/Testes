var chai = require('chai'),
    expect = chai.expect;

var request = require('request');

var urlApi = "https://jsonplaceholder.typicode.com";

module.exports = {
    metodoRetornaGet(urlRota, statusCodeGet, done) {
        request.get({
            url: `${urlApi}/${urlRota}`
        }, function (error, response, body) {
            expect(response.statusCode).to.equal(statusCodeGet);
            done();
        });
    }
}
