"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

var _data = _interopRequireDefault(require("./data.json"));

var _mockjsFetch = _interopRequireDefault(require("mockjs-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _mockjsFetch["default"])(_mockjs["default"]);

_mockjs["default"].mock('/shopping/restaurant/1', {
  code: 0,
  data: _data["default"][0].info
});

_mockjs["default"].mock('/ugc/v2/restaurants/restaurant_id/ratings', {
  data: _data["default"][0].ratings
});

_mockjs["default"].mock('/shopping/v2/menu', {
  data: _data["default"][0].goods
});