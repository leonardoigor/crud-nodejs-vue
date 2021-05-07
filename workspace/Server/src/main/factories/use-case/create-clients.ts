import { DbCreatClientUseCase } from '../../../data/use-cases'
import { ClientRepository, CheckByEmailRepository } from '../../../infra/db/mongo-db'






export const makeDbCreateClientUseCase = (): DbCreatClientUseCase => {

    const repository = new ClientRepository()
    const checkByEmail = new CheckByEmailRepository()

    return new DbCreatClientUseCase(checkByEmail, repository)
}