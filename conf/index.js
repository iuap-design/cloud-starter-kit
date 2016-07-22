
define(function( require, module, exports ){

  var pageInit = {
    /**
     * 初始化
     * @return {[type]} [description]
     */
    init: function( URLS ){
      var _this = this;

      URLS.forEach(function(item, index, input){
        var catogory = item.catogory;
        var data = item.data;
        var name = '', route = '';

        data.forEach(function( msg ){
          name = msg.name;
          route = '/dist/' + catogory + '/' + msg.url + '/index';

          _this.registerRouter(route);

        })
      });
    },
    /**
     * 注册路由
     * @param  {[type]} path [description]
     * @return {[type]}      [description]
     */
    registerRouter: function( path ){
      var routes = {};

      routes[path] = function(){
          var content = document.getElementById("content");
          var filePath = path + '.js';
          requirejs.undef(filePath);  
          require([filePath], function(module) {
            ko.cleanNode(content);
            content.innerHTML = "";

            if( module.init ) {
              module.init( content);
            } else {
              module.default( content );
            }
          })
      }

      var route = new Router(routes);
      route.init('#/dist/pages/home/nav/index');
    }
  }

  return pageInit;
})
