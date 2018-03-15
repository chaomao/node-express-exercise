var router = require('../../../routers/githubRouter');
var httpMocks = require('node-mocks-http');
var expect = require('chai').expect;
var nock = require('nock');

function buildResponse() {
  return httpMocks.createResponse({eventEmitter: require('events').EventEmitter});
}

describe('user info', function() {

  it('can get user profile', function(done){
    nock('https://api.github.com')
      .get('/users/chaomao')
      .reply(200, { id: 'handsome-chaomao' });

    var response = buildResponse();
    var request  = httpMocks.createRequest({
      method: 'GET',
      url: '/users/chaomao'
    });


    router.handle(request, response);

    response.on('end', function(){
      console.log('Assert: ', 'start assertion');
      expect(JSON.parse(response._getData())).to.eql({id: 'handsome-chaomao'});
      done();
    });
  });

  it('can get user profile', function(done){
    nock('https://api.github.com')
      .get('/users/chaomao')
      .replyWithError('something awful happened');

    var response = buildResponse();
    var request  = httpMocks.createRequest({
        method: 'GET',
        url: '/users/chaomao'
    });

    router.handle(request, response);

    response.on('end', function(){
      console.log('Assert: ', 'start assertion');
      expect(JSON.parse(response._getData())).to.eql({message: 'something awful happened'});
      done();
    });
  });
});
