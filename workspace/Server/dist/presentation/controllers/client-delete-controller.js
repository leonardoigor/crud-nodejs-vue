"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _helpers = require('../helpers');





 class ClientDeleteController  {

    constructor(
          deleteClientsUseCase,
          hasId
    ) {;this.deleteClientsUseCase = deleteClientsUseCase;this.hasId = hasId; }

    async handle(param) {

        let error = (this.hasId.validate(param))
        if (error) return _helpers.badRequest.call(void 0, error)

        try {
            let result = await this.deleteClientsUseCase.handle(param);
            if (result) {
                return _helpers.ok.call(void 0, result);
            }
            return _helpers.badRequestWithContent.call(void 0, { error: 'Error' })
        } catch (error) {
            return _helpers.serverError.call(void 0, error)
        }
    }
} exports.ClientDeleteController = ClientDeleteController;