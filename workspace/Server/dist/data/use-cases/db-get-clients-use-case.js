"use strict";Object.defineProperty(exports, "__esModule", {value: true});



 class DbGetClientsUseCase  {
    constructor(
          clientRepository
    ) {;this.clientRepository = clientRepository; }

    async handle() {
        return await this.clientRepository.getAll();
    }

} exports.DbGetClientsUseCase = DbGetClientsUseCase;