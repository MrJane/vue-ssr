var docsLoader = require.resolve('./docs-loader.js');
//根据不同环境配置不同的vue-loader,所以导出一个函数
module.exports=(isdev)=>{
    return {
        preserveWhiteSpace: true, //在我们写.vue文件的时候有些时候我们在写模板时不想让元素和元素之间有空格
        extractCSS:!isdev,  //在之前我们是用extract-text-webpack-plugin插件把css打包到单独一个文件中
        cssModlues:{
            localIdentName:'[path]-[name]-[hash:base64:5]',//这是意思在一个.vue文件里声明一个样式className 然后你通过cssModlues这种方式调用之后
                                                        //才会生成这样[path]-[name]-[hash:base64:5]一个名字，在别的文件无法调用的
            camelCase:true //会把我们用'-'命名class的方式变成驼峰命名
        }
        //hotReload:false  //根据环境变量生成
        // loader:{ //表示什么莫模块用什么loader，如.vue文件用template style script 模块 它们分别用了对应的loader
        //         //现在设置了docs模块 使用docsLoader(docs现在可以向template style script 写标签形式)
        //     'docs':docsLoader
        // },
        // preLoader:{
        //
        // },
        // postLoader:{
        //
        // }
    }
}
