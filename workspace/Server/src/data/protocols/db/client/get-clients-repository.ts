import { ClientEntity } from './../../../../domain/entities'
export interface GetClientsRepository {
    getAll: () => Promise<GetClientsRepository.Result>
}

export namespace GetClientsRepository {
    export type Result = ClientEntity[]
}
