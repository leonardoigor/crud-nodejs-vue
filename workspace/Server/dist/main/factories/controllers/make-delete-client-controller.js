"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _controllers = require('../../../presentation/controllers');
var _usecase = require('../use-case');
var _makehasid = require('./make-has-id');



 const makeClientDeleteController = () => {

    const controller = new (0, _controllers.ClientDeleteController)(
        _usecase.makeDbDeleteClientUseCase.call(void 0, ), _makehasid.makeHasId.call(void 0, )
    );

    return controller;
}; exports.makeClientDeleteController = makeClientDeleteController