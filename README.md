# HRCloud前端项目开发指导


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
$ git clone git@git.yonyou.com:nccloud_hr/fe.git
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
- hrcloud/ 编译产出的资源目录
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

### 2.5 联调测试

### 开发环境
| URL | 用户名  |  密码  |
| --- | --- | --- |
| 172.20.14.92/portal | hrtest | 666666a|

### 测试环境
| URL | 用户名  |  密码  |
| --- | --- | --- |
| 172.20.14.197/portal | hrtest | 666666a|

### 构建到开发服务器

> 请在本地测试正常后构建，不要频繁操作。

- 登录`ci.yonyou.com`
- 用户名/密码：guoyff/Aa296512521
- 点击hr一栏
- 点击最下面的fe job
- 点击左侧的开始构建

## 3. 开发相关资源
### 3.1 UE 产出的 PSD 设计稿

请访问这里下载：http://wiki.yonyou.com/display/NCCLOUDHR/ueui

### 3.2 UUI相关的学习资料

- [iweb文档](http://172.20.14.49/iweb/)
- [示例](http://ieop.yyuap.com/views/demo.html)

### 3.3 QQ群交流咨询问题

QQ群号：459794144

有不懂的问题一定要及时说出来讨论交流，在群里找丁锐锋同学或是李传忠同学进行解答。

## 4. 前端开发任务列表

### 4.1 2016年3月第一版

| # | 功能 | 前端开发 | 优先级 | 状态 | 是否有设计图 | 工作量预估 | 开发时间 | 前后端联调时间 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 班次设置 | 李智 | 10 | 已完成| 是 | ||
| 2 | 考勤地点 | 张美彪 | 10 |已完成|是 | |||
| 3 | 假日定义 | 李智 | 10 |已完成| 是 | |||
| 4 | 人员档案 | 李智 | 9 | 已完成  | 是 | |||
| 5 | 业务单元 | 周华锋 | 10 | 已完成 | 是 |||
| 6 | 公司 | 魏淑平 | 9 |已完成|是| |||
| 7 | 部门 | 苗润青 | 9 |进行中|是| |||
| 8 | 考勤日报 | 苗润青 | 9 | 已完成 | 是 | |||
| 9 | 考勤月报 | 魏淑平 | 9 | 已完成 | 是 | |||

### 4.2 2016年4月第二版

| # | 功能 | 前端开发 | 优先级 | 状态 | 是否有设计图 | 工作量预估 | 开发时间 | 前后端联调时间 | 对应后端开发 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 组织信息 | 李智 | 9 | 进行中 |  | |||孙鹏|
| 2 | 地点 | 苗润清 | 10 |已完成| | |||史陆腾|
| 3 | 合同主体 | 李智 | 10 |已完成|  | |||王卫波|
| 4 | 职等 | 彭一 | 9 | 已完成  |  | |||孙鹏|
| 5 | 职级 | 魏淑平 | 10 | 已完成 |  ||||史陆腾|
| 6 | 职务 | 魏淑平 | 9 |已完成|| |||王卫波|
| 7 | 职位 | 苗润清 | 9 |已完成|| |||孙鹏|
| 8 | 职务类别 | 彭一 | 10 | 已完成 |  | ||||

### 4.3 2016年5月第三版功能

**组织架构图**

| # | 功能 | 前端开发 | 优先级 | 状态 | 是否有设计图 | 工作量预估 | 开发时间 | 前后端联调时间 | 对应后端开发 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1| 编辑  | 李智| 10|  已完成 | | | | | |
| 2| 新增功能  | 李智 | 10| 已完成 | | | | | |
| 3| 删除功能、新增按钮、删除按钮 | 彭一 | 10 | 已完成 | | | | | |
| 4| 样式（区块大小，图片，线条，居中） | 彭一 | 8 | 已完成 | | | | | |
| 5| 默认层级为2级 | 彭一| 9  | 已完成 | | | | | |
| 6| 搜索定位 |  彭一，李智|8  | 已完成 | | | | | |
| 7| 联查（岗位）  | 李智| 10 | 已完成 | | | | | |
| 8| 完成人员信息页面的上传图片 | 李智| 9  | 已完成 | | | | | |

**人员变动**

| # | 功能 | 前端开发 | 优先级 | 状态 | 是否有设计图 | 工作量预估 | 开发时间 | 前后端联调时间 | 对应后端开发 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 人员类别 | 代飞 | 10 | 已完成 | 是 |  |||史陆腾|
| 2 | 基础设置 | 代飞 | 10 | 已完成 | 是 |  ||| |
| 3 | 变动类型 | 代飞 | 10 | 已完成 | 是|  ||| 史陆腾 |
| 4 | 变动原因 | 代飞 | 9 | 已完成 | 是|  ||| 史陆腾|
| 5 | 在岗状态 | 代飞 | 9 | 已完成 | 是 |  ||| 史陆腾 |

**入职相关**

| # | 功能 | 前端开发 | 优先级 | 状态 | 是否有设计图 | 工作量预估 | 开发时间 | 前后端联调时间 | 对应后端开发 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 员工入职 | 彭一  | 9 | 进行中 | 2d | ||| 王卫波 |
| 2 | 入职审批 | 彭一  | 9 | 进行中 | 2d | ||| 王卫波 |
| 3 | 入职手续办理 | 李智 | 9 | 进行中 | 2.5d | |||王卫波|
| 4 | 休假单查询（列表、卡片） | 李智 | 8 | 未开始  | 2d | |||孙鹏|

**首页**

| # | 功能 | 前端开发 | 优先级 | 状态 | 是否有设计图 | 工作量预估 | 开发时间 | 前后端联调时间 | 对应后端开发 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | HROP组员首页 | 苗润清，李智 | 9 | | | |||  |
| 2 | HROP组长首页 | 苗润清，李智 | 9 | | | |||  |
| 3 | HRBP首页 | 苗润清，李智 | 9 | | | |||  |
| 4 | 发送OFFER（方式待定） | 李智 | 9 |  |  | |||王卫波|
| 5 | 员工信息（平台在做部分） | 彭一 | 8 |   |  | |||孙鹏|
| 5 | 5个静态导航页面 |  | 8 |  |  | |||孙鹏|

**SSC部分**

| # | 功能 | 前端开发 | 优先级 | 状态 | 是否有设计图 | 工作量预估 | 开发时间 | 前后端联调时间 | 对应后端开发 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 自定义档案 | 苗润清 | 9 | 已完成 |  | ||| 孙鹏 |
| 2 | 自定义档案定义 | 苗润清 | 9 | 已完成 |  | ||| 孙鹏 |
| 3 | SSC工作台 | 苗润清 | 10 | 进行中 |  | 2d ||| 徐宏伟|
| 4 | 流程中心 | 苗润清 | 10 | 已完成 |  | ||| 徐宏伟 |
| 5 | 共享服务目录 | 苗润清 | 10 | 已完成 |  | ||| 刘超|
| 6 | 流程模型 | 苗润清 | 9 | 已完成 |  | | || 徐宏伟 |


**横向任务**

| # | 功能 | 前端开发 | 优先级 | 状态 | 是否有设计图 | 工作量预估 | 开发时间 | 前后端联调时间 | 对应后端开发 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 启用停用前加图标展示 | @all | 7 | 进行中 |   | |||  |
| 2 | 参照数据展示控件（树形、列表型、结构型） | 郭永峰 | 10 | 进行中 |   | |||  |
| 3 | 目录结构整理和导航整理 | 苗润清  | 10 | 进行中 | 1d  | |||  |
| 4 | 流程审批和穿透查询整合 |  | 10 | 进行中 |   | |||  |
