
import { ClientEntity } from '../../../../domain/entities'

export class FindClientRepository {
    find: (param: string) => Promise<FindClientRepository.Result>
}

export namespace FindClientRepository {
    export type Result = ClientEntity
}