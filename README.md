# {{React-Builder}}
>{{description}}

## 依赖库

- immutable
- react
	- react-dom
	- react-router
	- react-router-redux
- redux
	- redux-logger
	- redux-persist

## 开发依赖

- babel
	- preset
		- babel-preset-react
		- babel-preset-stage-3
	- plugin
		- babel-plugin-transform-async-to-generator
		- babel-plugin-transform-runtime
- eslint
	- plugin
		- eslint-plugin-react
- webpack
	- loader
		- babel-loader
		- file-loader
		- css-loader
		- style-loader
		- sass-loader
	- webpack-cli
	- webpack-serve

## 架构说明

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

## Install

```
git clone https://github.com/Timson020/React-Builder.git
```

## Useage

```
npm run init
```
