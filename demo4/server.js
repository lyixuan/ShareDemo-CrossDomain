const express = require('express');
const app = express();
// 路由配置
app.route('/api/users')
  .get(function (req, res) {
    console.log('有客户端连接: get - /user ');
    res.send({code: 200, msg: "成功", result: { name: "get请求结果...." }});
  })
  .post(function (req, res) {
    console.log('有客户端连接: post - /user ');
    res.json({code: 200, msg: "成功", result: { name: "post请求结果...." }});
  })
  .put(function (req, res) {
    console.log('有客户端连接: put - /user ');
    res.json({code: 200, msg: "成功", result: { name: "put请求结果...." }});
  })
  .delete(function (req, res) {
    res.send('Update the user')
  });


// 开启服务
const server = app.listen(9000, function () {
  const port = server.address().port;
  console.log('HTTP Server is running on: http://localhost:%s', port);
});
