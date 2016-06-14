define(function(require, exports, module ){

  // 引入相关的功能插件或模块
  var html = require('text!./index.html');
  var styles = require('css!./index.css');

  // import { default as Title } from('/hrcloud/components/Title/index.js');
  //
  // export default function( content ){
  //     content.innerHTML = html;
  //     $(".index .unit").hover(function(){
  //         $(this).children("img").addClass("change");
  //     },function(){
  //         $(this).children("img").removeClass("change");
  //     });
  //
  //     ReactDOM.render( <Title />, document.getElementById('app') );
  //
  // }

  return {
    init: function( content ){
        content.innerHTML = html;
        $(".index .unit").hover(function(){
            $(this).children("img").addClass("change");
        },function(){
            $(this).children("img").removeClass("change");
        });
    }
  }
});
