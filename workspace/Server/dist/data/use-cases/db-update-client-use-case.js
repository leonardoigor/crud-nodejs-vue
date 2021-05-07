"use strict";Object.defineProperty(exports, "__esModule", {value: true});






 class DbUpdateClientsUseCase  {
    constructor(  updateClientRepository) {;this.updateClientRepository = updateClientRepository; }

    async handle(param) {
        return this.updateClientRepository.update(param);

    }
} exports.DbUpdateClientsUseCase = DbUpdateClientsUseCase;