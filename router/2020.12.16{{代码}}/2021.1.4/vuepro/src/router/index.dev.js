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

var _Register = _interopRequireDefault(require("../pages/Register/Register.vue"));

var _shop = _interopRequireDefault(require("../pages/shop/shop.vue"));

var _Diancan = _interopRequireDefault(require("../pages/shop/Diancan/Diancan.vue"));

var _Pinglun = _interopRequireDefault(require("../pages/shop/Pinglun/Pinglun.vue"));

var _Shangjia = _interopRequireDefault(require("../pages/shop/Shangjia/Shangjia.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//使用vue路由
_vue["default"].use(_vueRouter["default"]); //导入组件


//创建路由规则
var router = new _vueRouter["default"]({
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/faxian',
    component: _faxian["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/index',
    component: _Home["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/mycenter',
    component: _Profile["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/Order',
    component: _Order["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/Register',
    component: _Register["default"],
    meta: {
      showFooter: false
    }
  }, {
    path: '/shop',
    component: _shop["default"],
    meta: {
      showFooter: false
    }
  }, {
    path: "/shop",
    component: _shop["default"],
    children: [{
      path: 'Diancan',
      component: _Diancan["default"]
    }, {
      path: 'Shangjia',
      component: _Shangjia["default"]
    }, {
      path: 'Pinglun',
      component: _Pinglun["default"]
    }, {
      path: "",
      redirect: '/shop/Diancan'
    }]
  }]
}); //将当前规则导出

var _default = router;
exports["default"] = _default;