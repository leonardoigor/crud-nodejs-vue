import { GetClientsUseCase } from '../../domain/use-cases'
import { ClientRepository } from './../../infra/db/mongo-db/'


export class DbGetClientsUseCase implements GetClientsUseCase {
    constructor(
        private readonly clientRepository: ClientRepository
    ) { }

    async handle(): Promise<GetClientsUseCase.Result> {
        return await this.clientRepository.getAll();
    }

}