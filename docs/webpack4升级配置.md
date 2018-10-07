在webpack4之后webpack在命令行启用功能都是放在webpack-cli,如果只是装了webpack它只是作为node包使用
webpack升级4后会有警告有些loader和插件都要升级，先把它卸载掉需要升级的loader和plguin再安装

更改配置：
在webpack.config.base.js 加个mode
const config = {
    mode:'development' //这个值只接收两个参数development 和production
    target: 'web', //表示webpack的编译目标是 web 平台
    //entry：入口文件
    entry: path.join(__dirname, '../src/main.js'), // __dirname 指的是根路径。将根路径、相对路径进行拼接，形成绝对路径
    //output：编译输出
}
webpack.optimize.CommonsChunkPlugin 在webpack4已经废弃掉了，但可以加个optimization:{},配置项:
 optimization:{
          spliteChunk:{
            chunks:'all'
          },
          runtimeChunk:true
        },
