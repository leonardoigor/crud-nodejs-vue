"use strict";Object.defineProperty(exports, "__esModule", {value: true});




 class DbFindClientUseCase  {

    constructor(
          clientRepository
    ) {;this.clientRepository = clientRepository; }

    async handle(param) {

        return await this.clientRepository.find(param)
    }
} exports.DbFindClientUseCase = DbFindClientUseCase;