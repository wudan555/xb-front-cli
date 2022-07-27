# xb-front-cli

**基于 NODE，自定义脚手架，实现项目模版的拉取、快速搭建，简化项目中的开发**

## 安装

```
npm install xb-front-cli -g
```

Notification: if your "xb commond is not found", you would run 'npm link' to link you commond.

## 具体功能

### 创建项目

如下提供了两种方式：

```
第一种：not recommend
首先需要修改/lib/config/common.js 中的url，即拉取的项目模板的默认远程地址
xb create 'projectName'
```

```
第二种：recommend
xb create 'projectName' -u http://pro_url.com
```

### 查看命令帮助

```
xb --help
```

### 创建公共组件

在项目目录下创建一个新的公共组件，可以使用"-d dest" 在指定目录下创建文件

```
xb addcpn 'cpnname' [,-d src/components]
```

### 添加页面

在项目目录下创建一个新的二级路由组件，同时创建 router.js 以便在项目中批量导入路由，可以使用"-d dest" 在指定目录下创建文件

```
xb addpage 'pagename' [,-d src/pages]
```
