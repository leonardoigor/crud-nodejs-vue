import { ClientEntity } from "@/domain/entities";
import { ObjectID } from "mongodb";
import {
    GetClientsRepository,
    ClientCreateRepository,
    UpdateClientRepository,
    DeleteClientRepository,
    FindClientRepository

} from "../../../../data/protocols";
import { MongoHelper } from "../../mongo-db/mongo-helper";




export class ClientRepository implements
    GetClientsRepository,
    ClientCreateRepository,
    UpdateClientRepository,
    DeleteClientRepository
    , FindClientRepository {
    async getAll(): Promise<GetClientsRepository.Result> {
        let clients = await (await MongoHelper.getCollection('Client')).find().toArray()
        clients = clients.map(client => MongoHelper.map(client))
        return clients
    }

    async create(param: ClientEntity): Promise<boolean> {
        try {
            await (await MongoHelper.getCollection('Client')).insertOne(param)

            return true
        } catch (error) {

            return false
        }
    }
    async update(param: ClientEntity): Promise<boolean> {
        try {

            let b = await (await MongoHelper.getCollection('Client'))
                .findOneAndUpdate(
                    { _id: new ObjectID(param.id) },
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
    async delete(param: any): Promise<boolean> {

        try {
            let result = await (await MongoHelper
                .getCollection('Client'))
                .deleteOne(
                    {
                        "_id": new ObjectID(param.id)
                    }
                )

            return result.deletedCount > 0 ? true : false
        } catch (error) {
            return false

        }
    }
    async find(param: string): Promise<ClientEntity> {

        let result = await (await MongoHelper
            .getCollection('Client'))
            .findOne(
                {
                    "_id": new ObjectID(param)
                }
            )
        return result
    }
}