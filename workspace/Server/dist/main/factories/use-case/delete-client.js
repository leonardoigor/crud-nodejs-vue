"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _usecases = require('../../../data/use-cases');
var _mongodb = require('../../../infra/db/mongo-db');






 const makeDbDeleteClientUseCase = () => {

    const repository = new (0, _mongodb.ClientRepository)()
    return new (0, _usecases.DbDeleteClientsUseCase)(repository)
}; exports.makeDbDeleteClientUseCase = makeDbDeleteClientUseCase