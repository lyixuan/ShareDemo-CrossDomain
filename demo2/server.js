const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// 开启服务
const server = app.listen(9000, function () {
  const port = server.address().port;
  console.log('HTTP Server is running on: http://localhost:%s', port);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// header设置
app.all("*", function(req, res, next) {

  /*
  * 该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求
  * */
  res.header("Access-Control-Allow-Origin", "http://localhost:63342");

  /*
  * 可选。允许带cookie；
  * Access-Control-Allow-Origin指定域请求时，该参数可用；
  * 前端开发者必须在AJAX请求中打开withCredentials属性。
  * */
  // res.header("Access-Control-Allow-Credentials", "true");

  /*
  * 可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
  * Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。
  * 如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。
  * */
  // res.header("Access-Control-Expose-Headers", "token");

  /*
  * 非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）
  * 这种情况下除了设置origin，还需要设置Access-Control-Request-Method和Access-Control-Request-Headers
  * */

  // 该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。
  res.header("Access-Control-Allow-Methods", "*");

  // 如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。
  // 它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");

  /*
  * 该字段可选，用来指定本次预检请求的有效期,在此期间，不用发出另一条预检请求。
  * */
  // res.header("Access-Control-Max-Age", "1728000");


  if(req.method == 'OPTIONS') {
    //让options请求快速返回
    res.sendStatus(200);
  } else {
    next();
  }
  // next();
});
// 路由配置
app.route('/user')
  .get(function (req, res) {
    console.log('有客户端连接: get - /user ');
    res.send('Get a random user');
  })
  .post(function (req, res) {
    console.log('有客户端连接: post - /user ');
    console.log('post参数：',req.body);
    res.json({code: 200, msg: "成功", result: { name: "哈哈" }});
  })
  .put(function (req, res) {
    res.send('Update the user')
  })
  .delete(function (req, res) {
    res.send('Update the user')
  });


