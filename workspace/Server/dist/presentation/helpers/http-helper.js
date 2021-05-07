"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _errors = require('./../../presentation/errors');

 const badRequest = (error) => ({
  status: 400,
  body: error
}); exports.badRequest = badRequest
 const badRequestWithContent = (data) => ({
  status: 400,
  body: { message: data }
}); exports.badRequestWithContent = badRequestWithContent

 const forbidden = (error) => ({
  status: 403,
  body: error
}); exports.forbidden = forbidden

 const unauthorized = () => ({
  status: 401,
  body: new (0, _errors.UnauthorizedError)()
}); exports.unauthorized = unauthorized
 const emailExist = (paramName) => ({
  status: 400,
  body: new (0, _errors.EmailAlreadyExist)(paramName)
}); exports.emailExist = emailExist

 const serverError = (error) => ({
  status: 500,
  body: new (0, _errors.ServerError)(error.stack)
}); exports.serverError = serverError

 const ok = (data) => ({
  status: 200,
  body: data
}); exports.ok = ok

 const noContent = () => ({
  status: 204,
  body: null
}); exports.noContent = noContent
