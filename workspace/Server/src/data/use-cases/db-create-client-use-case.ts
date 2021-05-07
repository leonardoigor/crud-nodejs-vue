import { ClientRepository } from '../../infra/db/mongo-db'
import { ok, badRequest } from '../../presentation/helpers'
import { CreatClientUseCase } from '../../domain/use-cases'
import { CheckClientByEmailRepository } from './../protocols/'
import { EmailAlreadyExist } from '../../presentation/errors'



export class DbCreatClientUseCase implements CreatClientUseCase {

    constructor(
        private readonly checkClientByEmailRepository: CheckClientByEmailRepository,
        private readonly clientRepository: ClientRepository
    ) { }

    async handle(param: CreatClientUseCase.Params): Promise<CreatClientUseCase.Result> {
        let isValid = false
        const exists = await this.checkClientByEmailRepository.checkByEmail(param.email)
        if (!exists) {
            isValid = await this.clientRepository.create(param)
            return ok('Cadastro Realizado com sucesso')
        }

        return badRequest(new EmailAlreadyExist('s'))
    }
}