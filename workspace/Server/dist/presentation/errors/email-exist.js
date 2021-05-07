"use strict";Object.defineProperty(exports, "__esModule", {value: true}); class EmailAlreadyExist extends Error {
  constructor(paramName) {
    super(`Email: ${paramName}`)
    this.name = 'Email_already_exist'
  }
} exports.EmailAlreadyExist = EmailAlreadyExist;
