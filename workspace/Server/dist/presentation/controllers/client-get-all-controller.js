"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _helpers = require('./../../presentation/helpers');




 class ClientGetAllController  {

    constructor(
          getClientUseCase
    ) {;this.getClientUseCase = getClientUseCase; }

    async handle() {
        try {
            const result = await this.getClientUseCase.handle();

            return _helpers.ok.call(void 0, result);
        } catch (error) {
            return _helpers.serverError.call(void 0, error)
        }
    }
} exports.ClientGetAllController = ClientGetAllController;