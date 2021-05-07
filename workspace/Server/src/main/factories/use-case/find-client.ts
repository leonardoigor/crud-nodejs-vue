import { DbFindClientUseCase } from '../../../data/use-cases'
import { ClientRepository } from '../../../infra/db/mongo-db'






export const makeDbFindClientUseCase = (): DbFindClientUseCase => {

    const repository = new ClientRepository()

    return new DbFindClientUseCase(repository)
}