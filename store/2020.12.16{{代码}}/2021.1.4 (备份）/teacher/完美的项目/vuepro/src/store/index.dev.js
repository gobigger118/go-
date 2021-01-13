"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _state = _interopRequireDefault(require("./state"));

var _mutation = _interopRequireDefault(require("./mutation"));

var _actions = _interopRequireDefault(require("./actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//导入模块文件
// 因为要在项目中使用vuex, 所以要注入灵魂
_vue["default"].use(_vuex["default"]); // state相当于真实存放的位置货物
// mutitions相当取货的运输员
// actions相当于安排取货的管理


var _default = new _vuex["default"].Store({
  state: _state["default"],
  mutations: _mutation["default"],
  actions: _actions["default"]
});

exports["default"] = _default;