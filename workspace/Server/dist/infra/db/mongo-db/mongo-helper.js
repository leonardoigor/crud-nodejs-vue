"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _mongodb = require('mongodb');




 const MongoHelper = {
    client: null ,
    uri: null ,

    async connect(uri) {
        this.uri = uri

        this.client = await _mongodb.MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Db Connected successfully')



    },

    async disconnect() {
        await this.client.close()
        this.client = null
    },

    async getCollection(name) {
        if (!_optionalChain([this, 'access', _ => _.client, 'optionalAccess', _2 => _2.isConnected, 'call', _3 => _3()])) {
            await this.connect(this.uri)
        }
        return this.client.db().collection(name)
    }
    ,
    map: (data) => {
        const { _id, ...rest } = data
        return { ...rest, id: _id }
    },

    mapCollection: (collection) => {
        return collection.map(c => exports.MongoHelper.map(c))
    }
}; exports.MongoHelper = MongoHelper