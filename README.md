# fe-nd-cli 
@(Newsdog)

[toc]

## Overview

newsdog前端脚手架工具


## Getting Started

全局安装`fe-nd-cli`

```bash
npm install -g  fe-nd-cli
```

生成项目，启动项目，

```bash
# 新建名为name的项目
nd new <name> 

cd <name>
# 安装依赖
npm init
nd server  # 本地开发
```



## 常用命令


### nd server

```bash
# 本地启动开发server环境
nd server
```

### nd g

同`nd generate`

```bash
# 生成一个React组件，通常是纯组件(Presentational Components)
nd g com <dir>
# 生成一个umi page，通常是Route Components(需要connect Model的组件)
nd g page <dir>
# 生成一个React组件，通常是纯组件(Presentational Components)
nd g com <dir>
# 生成一个umi page，通常是Route Components(需要connect Model的组件)
nd g page <dir>
```

### nd build 


```bash
# 前端静态资源打包
nd build 
```


