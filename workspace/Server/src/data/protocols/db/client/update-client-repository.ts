import { ClientEntity } from "../../../../domain/entities";



export class UpdateClientRepository {
    update: (param: ClientEntity) => Promise<UpdateClientRepository.Result>
}

export namespace UpdateClientRepository {
    export type Result = boolean
}