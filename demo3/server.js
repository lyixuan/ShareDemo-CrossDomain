const express = require('express');
const app = express();
// 路由配置
app.route('/jsonp')
  .get(function (req, res) {
    console.log('有客户端连接: get - /user ');
    const str = JSON.stringify({code: '200', msg: '成功'});
    res.send(`fn(${str})`);  // 必须返回 fn({"code":200,"msg":"成功"}) 格式
  });

// 开启服务
const server = app.listen(9000, function () {
  const port = server.address().port;
  console.log('HTTP Server is running on: http://localhost:%s', port);
});
