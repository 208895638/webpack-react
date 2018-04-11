const express = require("express")

const ReactSSR = require("react-dom/server")

const fs = require("fs")

const path = require("path")

const serverEntry = require("../dist/server-entry").default

const template = fs.readFileSync(path.join(__dirname,"../dist/index.html"),"utf-8")

const app = express()

app.use("/public",express.static(path.join(__dirname,"../dist/")))

app.get("*",function(req ,res){
  const appString =   ReactSSR.renderToString(serverEntry)
   res.send(template.replace("<!--app-->" , appString));  //这一段的意思是返回给前端一个页面
  // res.send(appString)  //这一段内容主要是react生成的片段 返回给前端
})

app.listen(3333,function(){
    console.log("server is listening on 3333")
})