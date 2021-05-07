"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _helpers = require('./../../presentation/helpers');



 class ClientFindController  {

    constructor(
          clientFIndUseCase
    ) {;this.clientFIndUseCase = clientFIndUseCase; }


    async handle(request) {

        try {
            const result = await this.clientFIndUseCase.handle(request.id)
            console.log(result, 'result');
            if (result !== null) return _helpers.ok.call(void 0, result)


            return _helpers.badRequestWithContent.call(void 0, 'User not find')
        } catch (error) {
            return _helpers.badRequestWithContent.call(void 0, 'some error on request')

        }
    }
} exports.ClientFindController = ClientFindController;