# idealPPT Bootstrap

结合 vika维格表(vika.cn) 与 reveal.js(revealjs.com)，快速搭建出个人专属的，支持在线演示的 PPT 数据库。

[toc]


## 🎨 介绍
传统的 PPT 演示文稿需要存在本地，即使使用 oneDrive 等云端存储服务也无法便捷地与他人进行分享，而且对跨设备跨平台也不友好。

idealPPT 利用 vika维格表 和 reveal.js 实现如下特性：

- [x] 使用现代浏览器进行演示文稿的播放
- [x] 将演示文稿的内容存储在维格表里，一行既可以表示一张幻灯片，也可以代表一个演示文稿，数据结构化，可自定义
- [x] 支持幻灯片模板自定义（存储在维格表）
- [x] 支持 markdown 语法
- [x] 演示文稿无需预编译，运行时动态渲染
- [x] 支持多种媒体类型在线播放（基于 vika维格表 的附件存储能力）


## 🔨 使用方法
本工程是一个快速脚手架，开发者可以基于此工程自行扩展。

**脚手架已集成如下依赖**

- **express**
nodejs 的轻量级 web 开发框架

- **nodemon**
实现 express 框架的 hot reload

- **browser-sync**
实现 html, css 等静态文件更新时的浏览器自动刷新

- **gulp**
自动化构建工具，使用 `series()` 将 nodemon 和 browser-sync 的任务串联起来按顺序执行


### 本地调试开发

```
gulp watch
```

### 部署
计划利用腾讯云云函数（SCF）+ Serverless Framework CLI 实现一键部署上云

// TODO
