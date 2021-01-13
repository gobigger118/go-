"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _mutationTypes = require("./mutation-types");

var _RECEIVE_ADDRESS$RECE;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_RECEIVE_ADDRESS$RECE = {}, _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_ADDRESS, function (state, _ref) {
  var address = _ref.address;
  //调度地址信息
  state.address = address;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_SHOPS, function (state, _ref2) {
  var shops = _ref2.shops;
  //调度地址信息
  state.shopsList = shops;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_GOODS, function (state, _ref3) {
  var goods = _ref3.goods;
  //调度地址信息
  state.goodsList = goods;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.SHOPINFOTP, function (state, _ref4) {
  var shopInfo = _ref4.shopInfo;
  state.shopInfo = shopInfo;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_RATINGS, function (state, _ref5) {
  var shopRating = _ref5.shopRating;
  state.shopRating = shopRating;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.R_GOODS, function (state, _ref6) {
  var shopGoods = _ref6.shopGoods;
  state.shopGoods = shopGoods;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.INCREMENT_FOOD_COUNT, function (state, _ref7) {
  var food = _ref7.food;

  if (food.count) {
    food.count++;
  } else {
    // vm
    // food.count=1
    _vue["default"].set(food, 'count', 1);
  }

  state.cartFoods.push(food);
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.DECREMENT_FOOD_COUNT, function (state, _ref8) {
  var food = _ref8.food;

  if (food.count) {
    food.count--;
  } else {
    _vue["default"].set(food, 'count', 1);
  }

  state.cartFoods.pop(food);
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.CLEAR_CART, function (state) {
  state.cartFoods = [];
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_USER_INFO, function (state, result) {
  window.localStorage.setItem('user_id', result.user_id);
  state.userInfo = result;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RESET_USER_INFO, function (state, _ref9) {
  var userInfo = _ref9.userInfo;
  window.localStorage.setItem('user_id', userInfo.user_id);
  state.userInfo = userInfo;
}), _RECEIVE_ADDRESS$RECE);

exports["default"] = _default;