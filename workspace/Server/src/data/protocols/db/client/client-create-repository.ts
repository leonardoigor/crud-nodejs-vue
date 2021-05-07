import { ClientEntity } from "../../../../domain/entities";



export class ClientCreateRepository {
    create: (param: ClientEntity) => Promise<ClientCreateRepository.Result>
}

export namespace ClientCreateRepository {
    export type Result = boolean
}