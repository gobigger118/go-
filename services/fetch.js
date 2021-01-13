// fetchfn将fetch 请求封装成函数
export default async(url='',data={},method='GET')=>{
    
    // 遍历data数据，拼接
  // 请求接口+？+key+‘值’+&+key+'='+值+&+key+'='+值  
let type=method.toUpperCase();
if(type=='GET'){
    let dataStr=''
Object.keys(data).forEach(key=>{// 将对象里的key值封装成数组
    dataStr+=key+='='+data[key]+'&'
})
// 如果get请求，有数据，使用拼接URL
if(dataStr!==''){
// 需要先将dataURL最后的&字符删掉
dataStr=dataStr.substr(0,dataStr.lastIndexOf('&'))
// 拼接URL
url=url+"?"+dataStr
}
}
let rqinit={
    method:type,
    headers:{
        'Content-Type':'application/json'
    },
}
// 如果是post请求添加body
  if(type=='POST'){
Object.defineProperty(rqinit,'body',{
    value:JSON.stringify(data)
})
}
// 执行请求
const response= await fetch(url,rqinit)
const responsejson=await response.json()
return responsejson

// 带参数的get请求，必须查询
    // if(method=='GET'){
    //     let rs =await fetch(url)
    //     let rsjson=await rs.json()
    //     return rsjson
    // }else if (method=='POST'){
    //     let rs =await fetch(url,{
    //         method:'POST',
    //         body:JSON.stringify(body)
    //     })
    //     let rsjson =await rs.json()
    //     return rsjson
    // }
}