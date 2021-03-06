const path = require("path")  //主要是来完成绝对路径的缩写
module.exports = {
    target:"node",
    entry:{ //应用的入口   打包的时候的入口文件
        app12:path.join(__dirname,"../client/server-entry.js")   //这个app12是生成的文件名称
    },
    output:{   //打包之后输出的地方
        filename:"server-entry.js",   //这俩参数就是   name代表的是entry下的app has0h是生成随机字符串
        path:path.join(__dirname , "../dist"),   //path就是输出的文件存放的地方
        publicPath:"/public",  //这个是给index。html里面script标签里面引用的路径另外加上/public
        libraryTarget:"commonjs2"
    },
    module:{ //
        rules:[ 
            {
                test:/.jsx$/,  //以.jsx结尾 /.jsx/
                loader:"babel-loader"   //babel是一个工具 编译最新的js语法为es5
            },
            {
                test:/.js$/,  //以.jsx结尾 /.jsx/
                loader:"babel-loader",
                exclude:[    //这个是除了之外的边编译
                    path.join(__dirname,"../node_modules")
                ]
            }
        ]
    }
}