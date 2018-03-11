var expect = require('chai').expect;
var nock = require('nock');

var github = require('../../lib/github.js');

describe('user info', function() {

  it('can get user profile', function(){
    nock('https://api.github.com')
      .get('/users/chaomao')
      .reply(200, { 'login': 'chaomao' });

    github.userInfo('chaomao', function(result){
      expect(JSON.parse(result)).to.eql({'login': 'chaomao'});
    });
  });


  it('can get user profile', function(){
    nock('https://api.github.com')
      .get('/users/chaomao')
      .replyWithError('something awful happened');

    github.userInfo('chaomao', {} ,function(result){
      expect(result.message).to.equal('something awful happened');
    });
  });
});
