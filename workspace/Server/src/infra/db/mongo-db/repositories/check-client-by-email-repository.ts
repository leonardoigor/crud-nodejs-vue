import { CheckClientByEmailRepository } from '../../../../data/protocols'
import { MongoHelper } from '../mongo-helper'


export class CheckByEmailRepository implements CheckClientByEmailRepository {
    async checkByEmail(email: string): Promise<boolean> {
        let clients = await (await MongoHelper
            .getCollection('Client'))
            .findOne({
                email
            })


        return clients !== null

    }
}