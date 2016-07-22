'use strict';

var mockConfigs = require('../conf/mock');
var serve = require('koa-static');
var proxy = require('./proxy');
var router = require('koa-router')();
var fetch = require('node-fetch');
var path = require('path');

module.exports = function(options) {

  var app = options.app;
  var useProxy = options.useProxy;
  var proxyIgnore = options.proxyIgnore || [];
  var host = options.host;
  var username = options.username;
  var password = options.password;
  var context = options.context || '';
  var port = options.serverport || 8080;

  return {
    start : function(){
      var tokenStorage = {};
      // var proxyMap = {};

      mockConfigs.forEach(function( config ){
      	// 使用服务器数据，遍历获得proxyMap
      	if (useProxy){
      		// proxyMap[config['url']] = config;
      	}
      	// 使用本地数据，请求转发
      	else{
      		router[ config['type'] ]( config['url'], function *(next) {
      				var mockFile = require('../mock/' + config['json']);
      				console.log(config['url'] + '请求返回的数据是：', mockFile);
      	    	this.body = JSON.stringify(mockFile);
      	  });
      	}
      });

      if (useProxy){
        var url = host + '/mlogin?username=' + username + '&password=' + password;

      	fetch( url )
          .then(function(res){
            console.log('登录地址：', url);
            console.log('模拟登陆认证中...');
        		return res.json()
        	})
          .then(function(json){
            console.log('登录结果：', json.msg);
            console.log('登录信息：', json);
        		tokenStorage.mockToken = json;
        	});

      	app.use(proxy({
      		host: host,
      		context: context,
      		// proxyMap: proxyMap,
          proxyIgnore: proxyIgnore,
      		tokenStorage:tokenStorage
      	}));
      	console.log('已启用后端代理,代理服务器:' + host);
      }else{
        console.log('服务已启动: http://localhost:8080');  
      }
    

      app.use(router.routes())
        .use(router.allowedMethods());

      app.use(serve(path.join(__dirname, '..')));
      app.listen(8080);
    }
  }
};
