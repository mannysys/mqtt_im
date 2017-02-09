'use strict';
var mosca = require('mosca');

//配置mosca(Server方式) http是网页方式客户端
var settings = {
  http: {
    port: 7410,
    bundle: true //提供给网页客户端的mqtt.js
  }
};

// 创建Server
var server = new mosca.Server(settings);

// 服务端准备好之后触发
server.on('ready', () => {
  console.log('MQTT server 启动...');
});
// 服务端出现Error时触发
server.on('server', (err) => {
  console.log('error', err);
});


// 客户端连接成功之后触发
server.on('clientConnected', (client) => {
  console.log('客户端连接成功：', client.id);

});
// 客户端断开连接之后触发
server.on('clientDisconnected', (client) => {
  console.log('客户端断开连接：', client.id);
});

// 监听发布的数据
server.on('published', (packet, client) => {
  // console.log(client, 'published data:', packet);
});


// 订阅
server.on('subscribed', (topic, client) => {
  console.log(client.id, '订阅的主题树：', topic);
});
// 取消订阅
server.on('unsubscribed', (topic, client) => {
  console.log(client.id, '取消订阅主题树：', topic);
});