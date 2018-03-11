var https = require('https');

module.exports = {
  userInfo: function(username, success_cb, fail_cb) {
    https.get({
      host: 'api.github.com',
      path: '/users/' + username,
      port: '443',
      timeout: '2000',
      headers: {'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
    }, function(response){
      var data = '';
      response.on('data', function(chunk){
        data += chunk;
      });
      response.on('end', function(){ success_cb(data); });
    }).on('error', function(error){ fail_cb(error); });
  }
};
