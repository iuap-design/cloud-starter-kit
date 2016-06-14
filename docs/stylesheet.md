# CSS样式文件改进

> **刚看了下大家的css文件，提几个改进点。**

1.命名规范要统一，现在css文件中出现了大量的驼峰命名，js里面命名按驼峰是合理的，但css里面统一用`-`来连接命名，比如`.demo-layout .common-header`，大家一致遵循这个命名规范。

```
// bad
.headerSearch{

}
// good
.header-search {

}
```

2.关于css作用域问题，这个是目前比较严重的问题，由于这是SAP单页应用的结构，css文件和html文件统一都是异步加载过去的，这就回导致css作用域污染的问题，比如大家定义的`.right .header`这样的css类名，整个应用内只要是加了这个class的都会渲染到，所以需要在你的样式前面约定一个大的作用域，比如html结构是这样的：

```
<div class="common-header">
  <div class="header-container">
    <h2 class="name">部门</h2>
    <span class="fa fa-star fa-lg star"></span>
  </div>
  <div class="right"></div>
</div>
```

对应css可以这样写：

```
// bad
.right {

}
// good
.common-header .right {

}
// bad
.name {

}
// good
.common-header .name {

}
```

3.不要什么都往`common.css`里面添加，**一定是两个及以上的页面具有公用的样式才提取到这个文件**，否则后面便难以维护，哪个地方的css能不能修改、能不能删除都不能确定了。

4.目前抽取了一个公共的头部html可以按如下方式写，样式放在common.css里面，需要在你的js里面require引入这个公共样式文件。

```
<div class="common-header">
  <div class="header-container">
    <h2 class="name">部门</h2>
    <span class="fa fa-star fa-lg star"></span>
    <button type="button" class="btn btn-primary btn-lg greBtn"   data-bind="click:getDept">
      <i class="fa fa-plus fa-lg"></i> 新 增
    </button>
	<!-- 这里继续添加相应的html片段 -->
  </div>
</div>
```
