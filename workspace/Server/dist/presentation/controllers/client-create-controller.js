"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _helpers = require('./../../presentation/helpers');




 class ClientCreateController  {

    constructor(
          createClientUseCase
    ) {;this.createClientUseCase = createClientUseCase; }

    async handle(param) {

        try {
            const result = await this.createClientUseCase.handle(param);

            return _helpers.ok.call(void 0, result);
        } catch (error) {
            return _helpers.serverError.call(void 0, error)
        }
    }
} exports.ClientCreateController = ClientCreateController;