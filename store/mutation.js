/*
vuex 的 mutations 模块
*/
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_GOODS,SHOPINFOTP,   RECEIVE_RATINGS,
  R_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'
// [方法名](state,{param}){}————实现更改state

export default {
  [RECEIVE_ADDRESS](state, { address }) {//调度地址信息
    state.address = address
  },
  [RECEIVE_SHOPS](state, { shops }) {//调度地址信息
    state.shopsList = shops
  },
  [RECEIVE_GOODS](state, { goods }) {//调度地址信息
    state.goodsList = goods
  },
  [SHOPINFOTP](state, { shopInfo }) {
    state.shopInfo = shopInfo
},
[RECEIVE_RATINGS](state, { shopRating }) {
  state.shopRating = shopRating
},
[R_GOODS](state, { shopGoods }) {
  state.shopGoods = shopGoods
},
[INCREMENT_FOOD_COUNT](state,{food}){
  if(food.count){
    food.count++
  }else{
    // vm
    // food.count=1
    Vue.set(food,'count',1)
  }
  state.cartFoods.push(food)
},
[DECREMENT_FOOD_COUNT](state,{food}){
  if(food.count){
    food.count--
  }else{
    Vue.set(food,'count',1)
 
  } 
  state.cartFoods.pop(food)
},
// 清空购物车

[CLEAR_CART](state){
  state.cartFoods=[]
},
[RECEIVE_USER_INFO](state,result){
  window.localStorage.setItem('user_id',result.user_id)
  state.userInfo=result
},
[RESET_USER_INFO](state,{userInfo}){
  window.localStorage.setItem('user_id',userInfo.user_id)
state.userInfo=userInfo
}
}