"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqShopGoods = exports.reqShopRatings = exports.reqShopInfo = exports.getShopInfo = exports.getGoods = exports.getShops = exports.getAddress = void 0;

var _fetch = _interopRequireDefault(require("./fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//导入封装好的fetch模块
var baseUrl = "https://elm.cangdu.org"; //调用接口获取数据
//根据经纬度详细定位

var getAddress = function getAddress(geohash) {
  return (0, _fetch["default"])(baseUrl + "/v2/pois/" + geohash);
}; //食品分类列表


exports.getAddress = getAddress;

var getShops = function getShops() {
  return (0, _fetch["default"])(baseUrl + "/v2/index_entry");
}; //获取商铺列表


exports.getShops = getShops;

var getGoods = function getGoods(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude;
  return (0, _fetch["default"])(baseUrl + "/shopping/restaurants", {
    latitude: latitude,
    longitude: longitude
  });
}; // 请求餐馆详细信息
// 接口与接口文档一直，但是，请求到的数据是data.json的数据
// export const getShopInfo = () => fetch('/goods')


exports.getGoods = getGoods;

var getShopInfo = function getShopInfo() {
  return (0, _fetch["default"])('/info');
};
/**
 * 获取商家信息(下列请求由mock拦截并返回 不需要代理)
 */


exports.getShopInfo = getShopInfo;

var reqShopInfo = function reqShopInfo() {
  return (0, _fetch["default"])(baseUrl + '/shopping/restaurant/1');
};
/**
 * 获取商家评价数组
 */


exports.reqShopInfo = reqShopInfo;

var reqShopRatings = function reqShopRatings() {
  return (0, _fetch["default"])(baseUrl + '/ugc/v2/restaurants/restaurant_id/ratings');
};
/**
 * 获取商家商品数组
 */


exports.reqShopRatings = reqShopRatings;

var reqShopGoods = function reqShopGoods() {
  return (0, _fetch["default"])(baseUrl + '/shopping/v2/menu');
};

exports.reqShopGoods = reqShopGoods;