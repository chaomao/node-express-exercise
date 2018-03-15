var https = require('https');

module.exports = {
  getUserInfo: function(req, res) {
    https.get({
      host: 'api.github.com',
      path: '/users/' + req.params.username,
      port: '443',
      timeout: '2000',
      headers: {'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
    }, function(response){
      var data = '';
      response.on('data', function(chunk){
        data += chunk;
      });
      response.on('end', function(){
        res.type('application/json').json(JSON.parse(data));
      });
    }).on('error', function(error) {
      console.log('error at github ' + error.message);
      res.json(error.message);
    });
  }
};
