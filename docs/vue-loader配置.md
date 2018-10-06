建立vue-loader.conf.js 导出一个函数根据不同环境配置不同参数
在我们用.vue文件开发时我们希望样式热更替应该使用vue-style-loader 不使用用style-loader，但是使用样式文件时热更替可以style-loader
在我们打包时都把之前打的包dist都删了  我们用一个工具 rimraf npm install 安装  很好用！！

package.json 再配置两个脚本代码如下：
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:client": "cross-env NODE_ENV=development webpack --config build/webpack.config.client.js",
    "build":"npm run clear && npm run build:client",
    "clear":"rimraf dist",
    "dev": "cross-env NODE_ENV=production webpack-dev-server --config build/webpack.config.client.js"
  },
  clear：清除dist目录
  build：先跑npm run clear再跑npm run build:client