"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  //计算总件数
  totleNum: function totleNum(state) {
    //reduce遍历   要显示每一类产品总数的和
    //遍历 state.cartFoots 拿到cartFoods[0]count  可用map--或foreach-
    var totleCount = state.cartFoods.reduce(function (totle, curValue) {
      return totle + curValue.count;
    }, 0);
    return totleCount;
  },
  //计算总价格
  totlePrice: function totlePrice(state) {
    return state.cartFoods.reduce(function (totle, curValue) {
      return totle + curValue.price * curValue.count;
    }, 0);
  }
};
exports["default"] = _default;