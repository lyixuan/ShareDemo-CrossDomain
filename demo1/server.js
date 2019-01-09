const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 路由配置
app.route('/user')
  .get(function (req, res) {
    console.log('有客户端连接: get - /user ');
    console.log(req.query.ID);
    res.send('Get a random user');
  })
  .post(function (req, res) {
    console.log('有客户端连接: post - /user ');
    console.log(req.body);
    res.json({code: 200, msg: "成功", result: { name: "哈哈" }});
  })
  .put(function (req, res) {
    res.send('Update the user')
  })
  .delete(function (req, res) {
    res.send('Update the user')
  });

// 开启服务
const server = app.listen(9000, function () {
  const port = server.address().port;
  console.log('HTTP Server is running on: http://localhost:%s', port);
});
