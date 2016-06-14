define(function(require, module, exports){

  require('css!./index.css');

  /**
   * 弹出浮层的插件
   * @param {[type]} opt [description]
   */
  var Modal = function(opt){
  	this.conf = {
  		title: '',
  		content: '',
  		confirmText: '',
  		confirmFn: function(){}
  	};

  	this.status = {
  		has_instance: false
  	};

  	this.dom = {
  		container: null,
  		buddy: null,
  		instance: null,
  		main: null,
  		wrap: null
  	};

  	this.init(opt);
  };

  Modal.prototype = {

  	init: function(opt){
  		$.extend(this.conf, opt);
  	},
  	_create: function(){
  		this.dom.instance = $('<div class="ui-modal"></div>');

  		var html = [];
  		html.push('<div class="main">');
  			if(this.conf.title !== ''){
  				html.push('<div class="title">');
  					html.push('<span>'+this.conf.title+'</span>');
  				html.push('</div>');
  			}
  			html.push('<div class="content">');
          html.push(this.conf.content);
  			html.push('</div>');

  			if(this.conf.confirmText){
  				html.push('<div class="control">');
  					html.push('<button class="btn btn-submit btn-close">'+this.conf.confirmText+'</button>');
  				html.push('</div>');
  			}

  		html.push("</div>");
  		this.dom.instance.html(html.join(''));
  		this.dom.container = $('body');

  		this.dom.main = this.dom.instance.find('.main');

  		//添加到dom tree
  		this.dom.container.append(this.dom.instance);
  		this.status.has_instance = true;

  		//绑定事件
  		var _this = this;
  		this.dom.instance.on('click', '.btn-close', function(){
  			_this.hide();
  			if(typeof _this.conf.confirmFn == 'function'){
  				_this.conf.confirmFn();
  			}
  		});
  	},
  	show: function(txt){
  		var _this = this;

  		if(this.status.has_instance){
  			this.dom.instance.show();
  		}else{
  			this._create();
  		}
  	},
  	hide: function(){
  		// this.dom.instance.hide();
  		this.dom.instance.remove();
  	}
  };

  module.exports = Modal;

});
