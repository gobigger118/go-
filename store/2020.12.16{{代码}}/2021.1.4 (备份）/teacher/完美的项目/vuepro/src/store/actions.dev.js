"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getDate = require("../services/getDate");

var _mutationTypes = require("./mutation-types");

/*
 *Action:通过操作mutation间接更新state的多个方法的对象
 *Action 可以包含任意异步操作。
 */
// 注意要引入api接口函数
var _default = {
  // 1.异步获取地址
  getAddressData: function getAddressData(_ref) {
    var commit, state, geohash, result;
    return regeneratorRuntime.async(function getAddressData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;
            // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
            geohash = state.latitude + ',' + state.longitude; // 1. 发送异步ajax请求

            _context.next = 4;
            return regeneratorRuntime.awrap((0, _getDate.getAddress)(geohash));

          case 4:
            result = _context.sent;
            // 2. 提交一个mutation
            // const address = result.data
            commit(_mutationTypes.RECEIVE_ADDRESS, {
              address: result
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  // 2.异步获取食品分类列表
  getshop: function getshop(_ref2) {
    var commit, result;
    return regeneratorRuntime.async(function getshop$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _getDate.getShops)());

          case 3:
            result = _context2.sent;
            // 2. 提交一个mutation
            // const address = result.data
            commit(_mutationTypes.RECEIVE_SHOPS, {
              shops: result
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  getGood: function getGood(_ref3) {
    var commit, state, geohash, result;
    return regeneratorRuntime.async(function getGood$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref3.commit, state = _ref3.state;
            // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
            // 1. 发送异步ajax请求
            geohash = state.latitude + ',' + state.longitude;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _getDate.getGoods)(geohash));

          case 4:
            result = _context3.sent;
            // 2. 提交一个mutation
            // const address = result.data
            commit(_mutationTypes.RECEIVE_GOODS, {
              goods: result
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  // 3.异步获取商家列表
  getShopInfo: function getShopInfo(_ref4) {
    var commit, shopInfo;
    return regeneratorRuntime.async(function getShopInfo$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            commit = _ref4.commit;
            _context4.next = 3;
            return regeneratorRuntime.awrap((0, _getDate.reqShopInfo)());

          case 3:
            shopInfo = _context4.sent;
            commit(_mutationTypes.SHOPINFOTP, {
              shopInfo: shopInfo
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  getShopRatings: function getShopRatings(_ref5) {
    var commit, shopRating;
    return regeneratorRuntime.async(function getShopRatings$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit = _ref5.commit;
            _context5.next = 3;
            return regeneratorRuntime.awrap((0, _getDate.reqShopRatings)());

          case 3:
            shopRating = _context5.sent;
            commit(_mutationTypes.RECEIVE_RATINGS, {
              shopRating: shopRating
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  getShopGoods: function getShopGoods(_ref6, callback) {
    var commit, shopGoods;
    return regeneratorRuntime.async(function getShopGoods$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            commit = _ref6.commit;
            _context6.next = 3;
            return regeneratorRuntime.awrap((0, _getDate.reqShopGoods)());

          case 3:
            shopGoods = _context6.sent;
            commit(_mutationTypes.R_GOODS, {
              shopGoods: shopGoods.data
            });

            if (callback) {
              callback();
            }

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    });
  }
};
exports["default"] = _default;