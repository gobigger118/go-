
module.exports = {
    devServer: {
        proxy:{
'/api':{
    target:'http://localhost:8001',//代理服务器
    ws:true,//开启代理
    changeOrigin:true,//改变源
    pathRewrite:{//重写路径
        '/api':''
    }
}
        },
       
      port:'3001'
      }

  }