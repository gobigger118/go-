import Vue from 'vue'
import VueRouter from 'vue-router'

//使用vue路由
Vue.use(VueRouter)

//导入组件
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'
import faxian from '../pages/faxian/faxian.vue'
import Register from '../pages/Register/Register.vue'
import shop from '../pages/shop/shop.vue'
import Diancan from '../pages/shop/Diancan/Diancan.vue'
import Pinglun from '../pages/shop/Pinglun/Pinglun.vue'
import Shangjia from '../pages/shop/Shangjia/Shangjia.vue'
//创建路由规则
const router=new  VueRouter({
  routes:[
    {path:'/' ,redirect:'/index'},
{path:'/faxian' ,component:faxian,meta:{
  showFooter:true
}},
{path:'/index',component:Home,meta:{
  showFooter:true
}},
{path:'/mycenter' ,component:Profile,meta:{
  showFooter:true
}},
{path:'/Order' ,component:Order,meta:{
  showFooter:true
}},
{path:'/Register' ,component:Register,meta:{
  showFooter:false
}},
{path:'/shop' ,component:shop,meta:{
  showFooter:false
}},

{path:"/shop",component:shop,
        children:[
            { path : 'Diancan',component:Diancan},
            { path : 'Shangjia',component:Shangjia},
            { path : 'Pinglun',component:Pinglun},
            {path:"",redirect:'/shop/Diancan'},
    ]
    },
]
})

//将当前规则导出
export default router