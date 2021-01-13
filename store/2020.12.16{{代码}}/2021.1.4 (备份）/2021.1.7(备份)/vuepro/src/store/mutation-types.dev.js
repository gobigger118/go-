"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RECEIVE_SEARCH_SHOPS = exports.CLEAR_CART = exports.DECREMENT_FOOD_COUNT = exports.INCREMENT_FOOD_COUNT = exports.RECEIVE_INFO = exports.RECEIVE_RATINGS = exports.R_GOODS = exports.RESET_USER_INFO = exports.RECEIVE_USER_INFO = exports.SHOPINFOTP = exports.RECEIVE_GOODS = exports.RECEIVE_SHOPS = exports.RECEIVE_ADDRESS = void 0;

/*
包含n个mutation的type名称常量
 */
// 1.接收地址信息
var RECEIVE_ADDRESS = 'receive_address'; // 2.接收分类数组

exports.RECEIVE_ADDRESS = RECEIVE_ADDRESS;
var RECEIVE_SHOPS = 'receive_shops';
exports.RECEIVE_SHOPS = RECEIVE_SHOPS;
var RECEIVE_GOODS = 'receive_goods';
exports.RECEIVE_GOODS = RECEIVE_GOODS;
var SHOPINFOTP = 'shopinfotp'; // 3.接收商家数组
//···

exports.SHOPINFOTP = SHOPINFOTP;
var RECEIVE_USER_INFO = 'receive_user_info'; // 接收用户信息

exports.RECEIVE_USER_INFO = RECEIVE_USER_INFO;
var RESET_USER_INFO = 'reset_user_info'; // 重置用户信息

exports.RESET_USER_INFO = RESET_USER_INFO;
var R_GOODS = 'r_goods'; // 接收商品数组

exports.R_GOODS = R_GOODS;
var RECEIVE_RATINGS = 'receive_ratings'; // 接收商家评价数组

exports.RECEIVE_RATINGS = RECEIVE_RATINGS;
var RECEIVE_INFO = 'receive_info'; // 接收商家信息

exports.RECEIVE_INFO = RECEIVE_INFO;
var INCREMENT_FOOD_COUNT = 'INCREMENT_FOOD_COUNT'; // 增加food中的count

exports.INCREMENT_FOOD_COUNT = INCREMENT_FOOD_COUNT;
var DECREMENT_FOOD_COUNT = 'DECREMENT_FOOD_COUNT'; // 减少food中的count

exports.DECREMENT_FOOD_COUNT = DECREMENT_FOOD_COUNT;
var CLEAR_CART = 'clear_cart'; // 清空购物车

exports.CLEAR_CART = CLEAR_CART;
var RECEIVE_SEARCH_SHOPS = 'receive_search_shops'; // 接收搜索的商家数组

exports.RECEIVE_SEARCH_SHOPS = RECEIVE_SEARCH_SHOPS;