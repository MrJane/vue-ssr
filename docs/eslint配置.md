安装相关包
npm eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
建立.eslintrc配置文件
eslint 无法识别.vue文件里的JavaScript代码还需要安装一个插件 eslint-plugin-html  这个插件其实就是识别scrpt标签里的JavaScript代码:在plugins写"html"

在package.json文件配置脚本
"scripts": {
    "lint":"eslint --ext .js --ext .jsx --ext .vue src/" //--ext 指定文件扩展名，可以设置文件后缀，整个脚本命令表示 检测src目录下的js/jsx/vue类型文件的代码规范

  },
如果eslint报的错误一条条去修复很麻烦，eslint可以帮我们修复，在package.json配置脚本
 "scripts": {
    "lint-fix":"eslint --fix --ext .js --ext .jsx --ext .vue src/" //加个参数'--fix'即可
}

我们希望在改代码时eslint实时自动给我们检查，避免我们改一堆代码再去eslint:
需要安装 eslint-loader babel-eslint
npm install eslint-loader babel-eslint
在.eslintrc配置 : "parser": "babel-eslint"然后在webpack.config.base.js中rules配置loader
{
     test: /\.(.js|.jsx|.vue)$/,
     loader: 'eslint-loader',
     exclude:'/node_modlues/',
     enforce: "pre"   //设置enforce 保证相应loader处理js/jsx/vue文件之前时处理，如果出错对应的loader就不进行处理
},


增加.editorconfig :

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true


在我们项目中要使用git进行代码提交的时候使用precommit的钩子，它让我们调用git commit命名时自动检测代码，如果我们代码不通过
eslint检测 我们commit代码没法进行提交不会推送到远程仓库，就不会共享给别人，代码规范问题只会我们本地，不会把这些问题带到
一起协作的开发人员那，首先安装包  husky
npm install husky -D //安装这个包之后会在项目目录下面.git里生成一个hoky,这个hoky会读取package.json的内容，然后在package.json写个脚本
脚本如下：
"scripts": {
    "lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/",
    "precommit":"npm run lint-fix"//我们装husky之后，每次执行git commit命令 会自动调用precommit
  },
注意点是：在我们安装husky之前都要git init 初始化git



