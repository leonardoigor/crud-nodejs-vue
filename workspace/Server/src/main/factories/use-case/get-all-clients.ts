import { DbGetClientsUseCase } from '../../../data/use-cases'
import { ClientRepository } from '../../../infra/db/mongo-db'






export const makeDbGetClientsUseCase = (): DbGetClientsUseCase => {

    const repository = new ClientRepository()
    return new DbGetClientsUseCase(repository)
}