# 如何更好的组织业务代码

## 1.纯函数式
```
/**
 * [task description]
 * @param  {[type]}  [description]
 */
function Init(){
	domRneder();
	handleEvent();
}

/**
 * [task description]
 * @param  {[type]}  [description]
 */
function domRneder(){
	console.log('domRneder.....')
}

/**
 * [task description]
 * @param  {[type]}  [description]
 */
function handleEvent(){
	console.log('handleEvent......')
}

```
## 2.单例模式
```
var Index = {
	/**
	 * [task description]
	 * @param  {[type]}  [description]
	 */
    init: function (){
        this.domRender();
        this.handleEvent();
    },
    /**
	 * [task description]
	 * @param  {[type]}  [description]
	 */
    domRneder: function(){
        console.log('domRender');
    },
    /**
	 * [task description]
	 * @param  {[type]}  [description]
	 */
    handleEvent: function(){
        console.log('handleEvent');
        this.otherFn();
    },
    /**
	 * [task description]
	 * @param  {[type]}  [description]
	 */
    otherFn: function(){
        console.log('todo....')
    }
};

Index.init();
```
## 3.构造函数加原型

### 3.1第一种
```
/**
 * [task description]
 * @param  {[type]}  [description]
 */
var Robot = function(){
    this.a = 'a';
    this.b = 'b';
    this.init();
 }

/**
 * [task description]
 * @param  {[type]}  [description]
 */
Robot.prototype.init = function(){
    this.say();
    this.work();
}

/**
 * [task description]
 * @param  {[type]}  [description]
 */
Robot.prototype.say = function(){
    console.log('say...')
}

/**
 * [task description]
 * @param  {[type]}  [description]
 */
Robot.prototype.work = function(){
    console.log('work...')
}

new Robot();
```
### 3.2第二种
```
/**
 * [task description]
 * @param  {[type]}  [description]
 */
function Detail(){
	this.init();
};

/**
 * [task description]
 * @param  {[type]}  [description]
 */
Detail.view = {
	"PRICE_BTN" : $("._price_btn a")
}

/**
 * [task description]
 * @param  {[type]}  [description]
 */
Detail.prototype = {
	init : function(){
		this.initUrl();
	},
	initUrl : function(){
		console.log('handle.....')
	}
}

new Detail();
```


## 4.ES6 Module

```
class Person {
	constructor(){
		this.a = 'a';
		this.b = 'b'
	}
	say(){
		console.log('say.....')
	}
}

new Person();


```
