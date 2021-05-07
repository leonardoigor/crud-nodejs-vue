import { ClientEntity } from './../entities/'

export interface GetClientUseCase {
    handle: (param: GetClientUseCase.id) => Promise<GetClientUseCase.Result>
}


export namespace GetClientUseCase {

    export type id = string
    export type Result = ClientEntity
}