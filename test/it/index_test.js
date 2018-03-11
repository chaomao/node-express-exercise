var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../../index');

chai.use(chaiHttp);

describe('/Get', function(){
  it('home page', function(done){
    chai.request(server)
        .get('/')
        .end(function(err, res){
          res.should.have.status(200);
          res.text.should.contain('Home');
          done();
        });
  });

  it('home page', function(done){
    chai.request(server)
        .get('/')
        .end(function(err, res){
          res.should.have.status(200);
          res.text.should.contain('Home');
          done();
        });
  });
});
