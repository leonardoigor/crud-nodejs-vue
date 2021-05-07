import mongoose from 'mongoose'
import { MongoHelper } from "../../../infra/db/mongo-db/mongo-helper"


export const clientSchema = new mongoose.Schema({
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
})

const Client = mongoose.model('Client', clientSchema)


export default Client