"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _controllers = require('../../../presentation/controllers');
var _usecase = require('../use-case');



 const makeDbUpdateClientUseCase = () => {
    const controller = new (0, _controllers.ClientUpdateController)(_usecase.makeUpdateClientUseCase.call(void 0, ));

    return controller;
}; exports.makeDbUpdateClientUseCase = makeDbUpdateClientUseCase