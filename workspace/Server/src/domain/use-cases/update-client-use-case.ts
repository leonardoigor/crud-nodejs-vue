import { ClientEntity } from '../entities'

export interface UpdateClientsUseCase {
    handle: (param: UpdateClientsUseCase.Param) => Promise<UpdateClientsUseCase.Result>

}


export namespace UpdateClientsUseCase {
    export type Param = ClientEntity
    export type Result = boolean
}