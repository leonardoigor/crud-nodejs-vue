"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _controllers = require('../../../presentation/controllers');
var _usecase = require('../use-case');



 const makeClientFindController = () => {
    return new (0, _controllers.ClientFindController)(_usecase.makeDbFindClientUseCase.call(void 0, ));

}; exports.makeClientFindController = makeClientFindController