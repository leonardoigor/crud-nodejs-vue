import { ClientEntity } from './../entities/'

export interface GetClientsUseCase {
    handle: () => Promise<GetClientsUseCase.Result>

}


export namespace GetClientsUseCase {
    export type Result = ClientEntity[]
}