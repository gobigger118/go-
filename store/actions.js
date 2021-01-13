/*
 *Action:通过操作mutation间接更新state的多个方法的对象
 *Action 可以包含任意异步操作。
 */

// 注意要引入api接口函数
import {
  getAddress,getShops,getGoods, reqShopInfo,   reqShopRatings,
  reqShopGoods,getUser
} from '../services/getDate'

import {
  RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_GOODS,SHOPINFOTP,
  RECEIVE_RATINGS,
  R_GOODS,RESET_USER_INFO  
  
} from './mutation-types'

export default {
  // 1.异步获取地址
  async getAddressData({commit,state}) {
    // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
    const geohash = state.latitude + ',' + state.longitude
    // 1. 发送异步ajax请求
    const result = await getAddress(geohash)
    // 2. 提交一个mutation
    // const address = result.data
    commit(RECEIVE_ADDRESS, {
      address:result
    })
  },
  // 2.异步获取食品分类列表
  async getshop({commit}) {
    // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
   
    // 1. 发送异步ajax请求
    const result = await getShops()
    // 2. 提交一个mutation
    // const address = result.data
    commit(RECEIVE_SHOPS, {
      shops:result
    })
  },
  
  async getGood({commit,state}) {
    // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
   
    // 1. 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
    const result = await getGoods(geohash)
    // 2. 提交一个mutation
    // const address = result.data
    commit(RECEIVE_GOODS, {
      goods:result
    })
  },
  // 3.异步获取商家列表
  async getShopInfo({ commit }) {
    let shopInfo = await reqShopInfo()
    commit(SHOPINFOTP, {
        shopInfo
    })
},
async getShopRatings({ commit }) {
  let shopRating = await reqShopRatings()
  commit(RECEIVE_RATINGS, {
      shopRating:shopRating.data 
  })
},
async getShopGoods({ commit },callback) {
  let shopGoods = await reqShopGoods()
 
  commit(R_GOODS, {
      shopGoods:shopGoods.data
  })
  if(callback){
    callback()
  }
},
async getUserInfo(commit){
let rs= await getUser()
  commit(RESET_USER_INFO,{
userInfo:rs.username
})
}
}