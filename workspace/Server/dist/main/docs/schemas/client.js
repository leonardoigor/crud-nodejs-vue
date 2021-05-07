"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);



 const clientSchema = new _mongoose2.default.Schema({
    document: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}); exports.clientSchema = clientSchema

const Client = _mongoose2.default.model('Client', exports.clientSchema)


exports. default = Client