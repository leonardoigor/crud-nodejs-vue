"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _mongohelper = require('../mongo-helper');


 class CheckByEmailRepository  {
    async checkByEmail(email) {
        let clients = await (await _mongohelper.MongoHelper
            .getCollection('Client'))
            .findOne({
                email
            })


        return clients !== null

    }
} exports.CheckByEmailRepository = CheckByEmailRepository;