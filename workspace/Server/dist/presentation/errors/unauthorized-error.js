"use strict";Object.defineProperty(exports, "__esModule", {value: true}); class UnauthorizedError extends Error {
  constructor() {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
} exports.UnauthorizedError = UnauthorizedError;
