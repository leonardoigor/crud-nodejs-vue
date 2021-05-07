"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _middlewares = require('./middlewares'); var _middlewares2 = _interopRequireDefault(_middlewares);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);



const app = _express2.default.call(void 0, )

_middlewares2.default.call(void 0, app)
_routes2.default.call(void 0, app)

exports. default = app