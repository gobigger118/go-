/*
包含n个mutation的type名称常量
 */
// 1.接收地址信息
export const RECEIVE_ADDRESS = 'receive_address'
// 2.接收分类数组
export const RECEIVE_SHOPS = 'receive_shops'
export const RECEIVE_GOODS = 'receive_goods'
export const SHOPINFOTP ='shopinfotp'
// 3.接收商家数组
//···
export const RECEIVE_USER_INFO = 'receive_user_info' // 接收用户信息

export const RESET_USER_INFO = 'reset_user_info' // 重置用户信息

export const R_GOODS = 'r_goods' // 接收商品数组
export const RECEIVE_RATINGS = 'receive_ratings' // 接收商家评价数组
export const RECEIVE_INFO = 'receive_info' // 接收商家信息

export const INCREMENT_FOOD_COUNT = 'INCREMENT_FOOD_COUNT' // 增加food中的count
export const DECREMENT_FOOD_COUNT = 'DECREMENT_FOOD_COUNT' // 减少food中的count

export const CLEAR_CART = 'clear_cart' // 清空购物车

export const RECEIVE_SEARCH_SHOPS = 'receive_search_shops' // 接收搜索的商家数组