"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _mongodb = require('mongodb');








var _mongohelper = require('../../mongo-db/mongo-helper');




 class ClientRepository 




 {
    async getAll() {
        let clients = await (await _mongohelper.MongoHelper.getCollection('Client')).find().toArray()
        clients = clients.map(client => _mongohelper.MongoHelper.map(client))
        return clients
    }

    async create(param) {
        try {
            await (await _mongohelper.MongoHelper.getCollection('Client')).insertOne(param)

            return true
        } catch (error) {

            return false
        }
    }
    async update(param) {
        try {

            let b = await (await _mongohelper.MongoHelper.getCollection('Client'))
                .findOneAndUpdate(
                    { _id: new (0, _mongodb.ObjectID)(param.id) },
                    {
                        $set: {
                            document: param.document,
                            email: param.email,
                            name: param.name,
                            phone: param.phone,
                        }
                    },
                    { upsert: true })

            return true
        } catch (error) {

            return false

        }

    }
    async delete(param) {

        try {
            let result = await (await _mongohelper.MongoHelper
                .getCollection('Client'))
                .deleteOne(
                    {
                        "_id": new (0, _mongodb.ObjectID)(param.id)
                    }
                )

            return result.deletedCount > 0 ? true : false
        } catch (error) {
            return false

        }
    }
    async find(param) {

        let result = await (await _mongohelper.MongoHelper
            .getCollection('Client'))
            .findOne(
                {
                    "_id": new (0, _mongodb.ObjectID)(param)
                }
            )
        return result
    }
} exports.ClientRepository = ClientRepository;