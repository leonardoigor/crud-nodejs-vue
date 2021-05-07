"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _usecases = require('../../../data/use-cases');
var _mongodb = require('../../../infra/db/mongo-db');






 const makeDbGetClientsUseCase = () => {

    const repository = new (0, _mongodb.ClientRepository)()
    return new (0, _usecases.DbGetClientsUseCase)(repository)
}; exports.makeDbGetClientsUseCase = makeDbGetClientsUseCase