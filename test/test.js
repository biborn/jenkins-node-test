const request = require('supertest');
const assert = require('assert');
const server = require('../index');
const mongoose = require('mongoose');

describe('GET /', function() {
    it('displays hello', function(done) {
        request(server).get('/').expect('Hello!', function() {
            server.close(function() {
                mongoose.connection.close(done);
            });
        });
    });
});