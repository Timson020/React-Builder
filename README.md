[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Timson020/React-Builder.git/pulls)

# {{React-Builder}}
>{{description}}

## 依赖库(dependencies)

|名称|说明|
|:--:|:--:|
|immutable|依赖库|
|react|依赖库|
|redux|依赖库|
|babel|开发依赖|
|eslint|开发依赖|
|webpack|开发依赖|

## 支持(Support)

- [X] ES6
- [X] async/await
- [X] split codo
- [X] redux save in sessionstorage || localstorage

## 架构说明(folder)

- src (业务源码)
	- common（业务逻辑工具类）
	- components（全局业务组件）
	- redux（状态机）
	- router（路由配置文件）
	- routes（路由页面）
	- scss（存放scss文件）
	- app.js（第一个react类）
	- index.js（入口文件）
- tools（工具文件）
- .babelrc（babel语法解析配置文件）
- .eslintrc（语法规范配置文件）
- .eslintignore（语法规范忽略配置文件）
- .gitignore（git忽略配置文件）
- .editorconfig（editor配置文件）
- webpack.config.js（webpack开发配置文件，包含开发环境，打包环境）
- package.json（项目配置文件）

## 安装(Install)

```
git clone https://github.com/Timson020/React-Builder.git
```

## 使用(Useage)

```
npm run init

cd projectName

npm run dev
```

## 打包(Release)

```
npm run release
```
