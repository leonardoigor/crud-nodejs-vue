"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _middlewares = require('./../middlewares');



exports. default = (app) => {
  app.use(_middlewares.bodyParser)
  app.use(_middlewares.cors)
  app.use(_middlewares.contentType)
}
