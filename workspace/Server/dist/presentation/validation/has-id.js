"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _errors = require('./../errors');





 class HasId  {
    validate(input) {

        if (input.id === undefined) {

            return new (0, _errors.InvalidParamError)('id')
        }

    }
} exports.HasId = HasId;