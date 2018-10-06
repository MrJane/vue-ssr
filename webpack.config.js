var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development';
const config = {
    // entry:'./src/main.js' //可以这样写，保持绝对路径即可
    entry: path.join(__dirname, './src/main.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
        //path: path.resolve('./dist') 两种写法
    },
    module: {
        rules: [
            {
                test: /\.vue$/, use: "vue-loader"
            },
            //{test:/\.vue$/, loader: "vue-loader"} 第二种写法
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.styl$/, use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /.(gif|jpg|png|svg|jpeg)$/,
                use: [{
                    loader: 'url-loader', //每个loader，use都可以用对象配置
                    options: {   //这个options参数是传给url-loader，参数也可以在loader后面加问号 url-loader?limit=1024
                        limit: 1024,
                        name: '[name].[ext]' //指定输出的名字 ：[name].[ext]输出和原来文件名一样
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.evn': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlWebpackPlugin({})
    ]
};
if (isDev) {
    config.devtool = '#cheap-module-eval-source-map';//调试代码用的，在浏览器打开还是源码,webpack官方推荐的。提高效率和准确性
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',  //注意，ip地址是字符串
        overlay: { // 如果有任何的错误，就让它显示到网页上
            errors: true
        },
        //open:true, 启动webpack-dev-server 自动打开浏览器
        hot: true //比如改一个组件，不会让整个页面重新加载
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()   //减少出现 不必要的错误信息
    );
}
module.exports = config;