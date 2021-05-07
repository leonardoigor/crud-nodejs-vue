"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _usecases = require('../../../data/use-cases');
var _mongodb = require('../../../infra/db/mongo-db');






 const makeDbCreateClientUseCase = () => {

    const repository = new (0, _mongodb.ClientRepository)()
    const checkByEmail = new (0, _mongodb.CheckByEmailRepository)()

    return new (0, _usecases.DbCreatClientUseCase)(checkByEmail, repository)
}; exports.makeDbCreateClientUseCase = makeDbCreateClientUseCase