import {
    CheckClientByEmailRepository,
    UpdateClientRepository,
    DeleteClientRepository
} from "../../../src/data/protocols";
import { ClientEntity } from "../../../src/domain/entities";




export class CheckClientByEmailRepositorySpy implements CheckClientByEmailRepository {
    email: string
    result = false
    async checkByEmail(email: string): Promise<CheckClientByEmailRepository.Result> {
        this.email = email
        return this.result
    }
}

export class UpdateClientSpy implements UpdateClientRepository {
    param: ClientEntity
    result = false
    async save(param: ClientEntity): Promise<UpdateClientRepository.Result> {
        this.param = param
        return this.result
    }

}

export class DeleteClientSpy implements DeleteClientRepository {
    param: string
    result = false
    async save(param: string): Promise<boolean> {
        this.param = param
        return this.result
    }
}