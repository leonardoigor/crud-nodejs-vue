import { DbUpdateClientsUseCase } from '../../../data/use-cases'
import { ClientRepository } from '../../../infra/db/mongo-db'






export const makeUpdateClientUseCase = (): DbUpdateClientsUseCase => {

    const repository = new ClientRepository()

    return new DbUpdateClientsUseCase(repository)
}