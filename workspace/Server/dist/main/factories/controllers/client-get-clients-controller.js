"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _controllers = require('../../../presentation/controllers');
var _ = require('../use-case/');



 const makeClientGetClientsController = () => {
    const controller = new (0, _controllers.ClientGetAllController)(_.makeDbGetClientsUseCase.call(void 0, ));

    return controller;
}; exports.makeClientGetClientsController = makeClientGetClientsController