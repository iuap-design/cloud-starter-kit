
# 项目开发指导

## 技术栈

- iuap design
- nodejs
- koa
- gulp
- director
- less
- require
- babel
- git
- react

## 开发准备

### Nodejs相关

- 全局安装nodejs环境，下载请前往[nodejs.org](https://nodejs.org)
- 如果你还不太了解Nodejs，请前往[Node.js知识详解](http://guoyongfeng.github.io/idoc/html/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/Node.js%E7%9F%A5%E8%AF%86%E8%AF%A6%E8%A7%A3.html)。
- [Nodejs环境配置](http://guoyongfeng.github.io/idoc/html/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/Nodejs%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html)
- [NPM的使用方法](http://guoyongfeng.github.io/idoc/html/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/NPM%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.html)

### Git相关

- 下载Git客户端，方便命令行操作，下载请前往[git-scm.com](https://git-scm.com/download/)
- 如果你还不熟悉基本的git命令行操作，请前往学习[Git和Github快速入门指南](http://guoyongfeng.github.io/idoc/html/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/Git%E5%92%8CGithub%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97.html)。

### 编辑器和浏览器

- 选一款自己喜欢的编辑器：Atom/Sublime Text 3/Webstorm，贴一下集中的导航[下载地址](http://guoyongfeng.github.io/idoc/html/%E5%9B%A2%E9%98%9F/%E6%96%B0%E5%91%98%E5%B7%A5%E5%85%A5%E8%81%8C%E6%8C%87%E5%8D%97.html)。
- 推荐下载Chrome或Firefox进行前端开发调试


## 1. 下载项目并且启动

```
$ git clone git@github.com:iuap-design/cloud-starter-kit.git
$ cd fe
# 切换到develop分支进行开发
$ git checkout develop
# 安装依赖
$ npm install
# 启动开发
$ npm run dev
# 访问http://localhost:8080
```

## 2. 开发和调试

两条命令支持开发：
- 启动开发
```
$ npm run dev
```

- 清空hrcloud目录下的资源
```
$ npm run clean
```
### 2.1 目录说明

- docs/ 文档
- examples/ 示例
- gulpfile.js gulp构建脚本
- dist/ 编译产出的资源目录
- index.html 调试首页
- mock.config.js 模拟数据配置
- mockData/ 模拟接口json数据
- node_modules/ node第三方包
- package.json npm管理文件
- README.md 项目说明文件
- require.config.js requirejs配置
- server/ 本地服务和代理配置
- src/ 开发源代码目录
  - pages
		* time
		* home
		* ssc
		* corehr
  - static 图片、音频、视频...
  - util 公共方法或是插件的抽取
  - styles 全局样式文件
- vendor/ 第三方插件、框架、类库、路由等
```

### 2.2 开发起步

- 在 `src/pages` 目录下新增功能页面，可参考其他目录的代码。
- 为了方便调试，在 `index.html` 文件内新增你的页面 URL，具体可以看里面的注释部分。

```
$ cd src/pages/time && mkdir demo
$ cd demo && touch demo.html demo.js demo.css
```

代码清单：`src/pages/time/demo/demo.html`

```
.demo {
  border: 1px solid #ccc;
}
```

代码清单：`src/pages/time/demo/demo.css`

```
<div class="demo">
  <h3>
    这是一个示例页面的html代码片段
  </h3>
</div>
```
代码清单：`src/pages/time/demo/demo.js`

```
define(function(require, module, exports){
  // 引入相关的功能插件或模块
  var html = require('text!./demo.html');
  var demoStyles = require('css!./demo.css');

  function DemoLogic(){
    this.init = function(){
      alert('hey, man!');
    }
  }

  // 以下部分代码基本是格式化的，暴露的init方法用于和portal进行集成
  return {
		init: function( content ) {
			// 插入html片段
			content.innerHTML = html;
			// 执行我们的业务主逻辑
			new DemoLogic().init();
		}
	}

})

```

> 对以上代码的基本说明：引入了相应的html片段和css样式，另外，由于是和portal集成，在portal部分加载了以下公共的类库或是框架：
> 1. `bootstrap`
> 2. `director` **处理前端路由**
> 3. `jquery`
> 4. `knockout` **前端MVVM框架**
> 5. `require`
> 6. `hrfonts`  **hrfonts是UE通过iconfont制作的图标字体库**
> 7. `font-awesome`
> 8. `uui`   **UUI是UAP WEB平台基于knockout和jquery封装的集数据模型和功能插件于一体的内部前端框架**

这样基本编辑之后，在`index.html`文件中按照注释说明，添加你新增页面的导航，代码如下：

```
<a href="#/hrcloud/pages/demo/demo"><i class="demo-menu-icon u-color-grey-400 fa fa-home fa-2x" role="presentation"></i>示例</a>
```

### 2.3 数据模拟和联调

调试是开发过程中关键而重要的一步，经常在这个阶段出现一些问题，建议的开发步骤是：
1. 前端本地模拟数据调试，跑通业务逻辑
2. 前后端本地调试，跑通接口数据
3. 部署到服务器上联调

#### 2.3.1 前端本地模拟数据调试

- 数据模拟配置文件： `mock.config.js`，先在这个文件中新增一条模拟路由：

```
{
	  type:"get",         // 请求类型
	  url:"/demo/data",   //请求url
	  json:"demo.json"    //模拟数据文件，路径地址相对于mockData目录，**可以创建二级甚至三级目录，不要只在一级目录创建文件**
}
```

- 在mockData目录下新增相应的json模拟数据

```
$ cd mockData && touch demo.json
```

编辑demo.json里面的模拟数据，代码清单：`mockData\demo.json`

```
{
    "statusCode": 200,
    "message": "操作成功",
    "method": null,
    "data": {
        "name": "guoyongfeng"
    },
    "callbackType": null
}
```

具体应该写什么样的模拟数据，需要前后端提前约定模拟接口和接口数据。

- 现在我们是本地模拟数据，请修改`gulpfile.js`里面的`useProxy`为`false`。
- 在demo.js文件里面编辑代码，获取我们模拟的数据

```
define(function(require, module, exports){

  // 引入相关的功能插件或模块
  var html = require('text!./demo.html');
  var demoStyles = require('css!./demo.css');

  function DemoLogic(){
    this.init = function(){
      alert('hey, man!');
      this.getData();
    }
  }

  DemoLogic.prototype = {
    getData: function(){
      $.ajax({
        url: '/demo/data',
        type: 'get',
        dataType: 'json',
        success: function( res ){
          alert( res.data.name );
        }
      })
    }
  };

  // 以下部分代码基本是格式化的，暴露的init方法用于和portal进行集成
  return {
		init: function( content ) {
			// 插入html片段
			content.innerHTML = html;
			// 执行我们的业务主逻辑
			new DemoLogic().init();
		}
	}

})

```

#### 2.3.2 前后端本地联调

- 将`app.js`文件中的`useProxy`值设置为`true`即可
- `app.js`里有个host字段用于配置请求哪个服务器地址的数据，默认是`http://172.20.14.92`，在前后端本地联调过程中，可以修改这个host指到对应的服务端工程师本机的服务地址，如：`var host = 'http://10.1.255.252:8081';`

### 2.4 iweb基本使用

> 完成表单的展示<br>
> 完成表单的的增删改查

[iweb开发指导](http://172.20.14.49/iweb/guide/index.html)

## 3. UUI相关的学习资料

- [iweb文档](http://172.20.14.49/iweb/)
- [示例](http://ieop.yyuap.com/views/demo.html)
