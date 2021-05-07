"use strict";Object.defineProperty(exports, "__esModule", {value: true}); class InvalidParamError extends Error {
  constructor (paramName) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
} exports.InvalidParamError = InvalidParamError;
