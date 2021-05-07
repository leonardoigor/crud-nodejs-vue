"use strict";Object.defineProperty(exports, "__esModule", {value: true});

 const contentType = (req, res, next) => {
  res.type('json')
  next()
}; exports.contentType = contentType
