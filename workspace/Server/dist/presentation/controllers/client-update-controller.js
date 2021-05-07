"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _helpers = require('../helpers');




 class ClientUpdateController  {

    constructor(
          updateClientUseCase
    ) {;this.updateClientUseCase = updateClientUseCase; }

    async handle(param) {

        try {
            await this.updateClientUseCase.handle(param);
            return _helpers.ok.call(void 0, 'Atualizado com sucesso');
        } catch (error) {
            return _helpers.serverError.call(void 0, error)
        }
    }
} exports.ClientUpdateController = ClientUpdateController;