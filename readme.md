# Skedo 

Skedo——旨在减少产品、技术、UI间沟通的低代码搭建平台。

## 开发环境搭建

1. node >= 12 （官网下载）

2. ts-node `npm install ts-node -g` 

3. yarn： `npm install yarn -g` 

4. 安装

   ```shell
   yarn install
   
   # 安装所有:
   #  依赖
   #  link
   npm run reinstall
   
   # 编译TS模块
   npm run build-ts
   
   ```
   
5. 启动： `npm start` 

## Skedo 部署文档

1. 安装项目依赖
   ```shell
   yarn install
   ```
2. 逐个安装子项目依赖以及本地 link
   ```shell
   yarn reinstall
   ```
3. 编译项目 TS 为 JS
   ```shell
   yarn build-ts 
   ```
4. 初始化数据库
   ```shell
   ts-node packages\skedo-dao\src\force_build_db.ts 
   ```
5. 启动项目
   ```shell
   yarn start
   ```
6. 检查服务是否全部启动
   ```shell
   pm2 list
   ```

## 常见问题

1. windows 下闪出 cmd.exe 
   解决方案：检查 pm2 运行情况 由于某个服务没有正常启动，pm2 在一直尝试启动该服务导致一直闪出 cmd.exe .

