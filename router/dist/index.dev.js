"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../pages/Home/Home.vue"));

var _Profile = _interopRequireDefault(require("../pages/Profile/Profile.vue"));

var _Order = _interopRequireDefault(require("../pages/Order/Order.vue"));

var _faxian = _interopRequireDefault(require("../pages/faxian/faxian.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//使用vue路由
_vue["default"].use(_vueRouter["default"]); //导入组件


//创建路由规则
var router = new _vueRouter["default"]({
  routes: [{
    path: '/faxian',
    component: _faxian["default"]
  }, {
    path: '/index',
    component: _Home["default"]
  }, {
    path: '/mycenter',
    component: _Profile["default"]
  }, {
    path: '/Order',
    component: _Order["default"]
  }]
}); //将当前规则导出

var _default = router;
exports["default"] = _default;