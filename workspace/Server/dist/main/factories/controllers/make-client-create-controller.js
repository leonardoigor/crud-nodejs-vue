"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _controllers = require('../../../presentation/controllers');
var _ = require('../use-case/');



 const makeClientCreateController = () => {
    const controller = new (0, _controllers.ClientCreateController)(_.makeDbCreateClientUseCase.call(void 0, ));

    return controller;
}; exports.makeClientCreateController = makeClientCreateController