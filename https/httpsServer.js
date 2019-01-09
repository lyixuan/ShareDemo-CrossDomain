const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
const privateKey  = fs.readFileSync('/Users/admin/path/private.pem', 'utf8');
const certificate = fs.readFileSync('/Users/admin/path/file.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};


// 开启服务
const SSLPORT = 18080;
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(SSLPORT, function () {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

// 路由配置
app.use(express.static(path.join(__dirname, 'public')));
app.route('/user')
  .get(function (req, res) {
    console.log('有客户端连接: get - /user ');
    res.send('Get a random user');
  })
  .post(function (req, res) {
    res.json({code: 200, msg: "成功", result: { name: "哈哈" }});
  })
  .put(function (req, res) {
    res.send('Update the user')
  })
  .delete(function (req, res) {
    res.send('Update the user')
  });