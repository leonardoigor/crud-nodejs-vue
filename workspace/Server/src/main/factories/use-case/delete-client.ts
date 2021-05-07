import { DbDeleteClientsUseCase } from '../../../data/use-cases'
import { ClientRepository } from '../../../infra/db/mongo-db'






export const makeDbDeleteClientUseCase = (): DbDeleteClientsUseCase => {

    const repository = new ClientRepository()
    return new DbDeleteClientsUseCase(repository)
}