module.exports = {
    entry: './entry.js',  //是指定webpack要打包的那个入口文件
    //这个属性output是打包以后生成的文件放到那里叫什么名字 path指定以下文件所在路径
    output: {
        path: __dirname,        //是将生成的文件放在跟该配置文件同一目录下面
        filename: 'bundle.js'   //打包后生成文件的名字
    },
    devtool: 'source-map',
    //属性module表示要使用的模块
    module: {
        noParse: [/jquery/],  //表示不需要jquery第三方库进行打包了
        loaders: [{
            test: /image/,
            loader: 'file'
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'  //知道所有.js所有文件都需要使用babel处理下转换
        },{
            test: /\.css$/,
            loader: 'style!css!'     //检测是css文件使用style和css的loader工具
        }]

    }

}