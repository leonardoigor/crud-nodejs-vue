"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _helpers = require('../../presentation/helpers');


var _errors = require('../../presentation/errors');



 class DbCreatClientUseCase  {

    constructor(
          checkClientByEmailRepository,
          clientRepository
    ) {;this.checkClientByEmailRepository = checkClientByEmailRepository;this.clientRepository = clientRepository; }

    async handle(param) {
        let isValid = false
        const exists = await this.checkClientByEmailRepository.checkByEmail(param.email)
        if (!exists) {
            isValid = await this.clientRepository.create(param)
            return _helpers.ok.call(void 0, 'Cadastro Realizado com sucesso')
        }

        return _helpers.badRequest.call(void 0, new (0, _errors.EmailAlreadyExist)('s'))
    }
} exports.DbCreatClientUseCase = DbCreatClientUseCase;