const request = require('supertest');
const assert = require('assert');
const server = require('../index');

describe('GET /', function() {
    it('displays hello', function(done) {
        request(server).get('/').expect('Hello!', done);
    });
});