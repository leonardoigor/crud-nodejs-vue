import { ClientRepository } from '../../infra/db/mongo-db'
import { GetClientUseCase } from '../../domain/use-cases'



export class DbFindClientUseCase implements GetClientUseCase {

    constructor(
        private readonly clientRepository: ClientRepository
    ) { }

    async handle(param: GetClientUseCase.id): Promise<GetClientUseCase.Result> {

        return await this.clientRepository.find(param)
    }
}