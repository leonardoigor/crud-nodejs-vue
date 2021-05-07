"use strict";Object.defineProperty(exports, "__esModule", {value: true});





 class DbDeleteClientsUseCase  {
    constructor(
          DeleteClientRepository
    ) {;this.DeleteClientRepository = DeleteClientRepository; }

    async handle(param) {
        return this.DeleteClientRepository.delete(param);

    }
} exports.DbDeleteClientsUseCase = DbDeleteClientsUseCase;