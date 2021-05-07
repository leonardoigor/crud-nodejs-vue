"use strict";Object.defineProperty(exports, "__esModule", {value: true});






var _controllers = require('../factories/controllers');
var _ = require('./../adapters/');


exports. default = (router) => {


    router.get('/get-all', _.adaptRoute.call(void 0, _controllers.makeClientGetClientsController.call(void 0, )))
    router.post('/create', _.adaptRoute.call(void 0, _controllers.makeClientCreateController.call(void 0, )))
    router.post('/update', _.adaptRoute.call(void 0, _controllers.makeDbUpdateClientUseCase.call(void 0, )))
    router.post('/delete', _.adaptRoute.call(void 0, _controllers.makeClientDeleteController.call(void 0, )))
    router.post('/find', _.adaptRoute.call(void 0, _controllers.makeClientFindController.call(void 0, )))
}