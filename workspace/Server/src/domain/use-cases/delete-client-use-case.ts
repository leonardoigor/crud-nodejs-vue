export interface DeleteClientsUseCase {
    handle: (param: DeleteClientsUseCase.id) => Promise<DeleteClientsUseCase.Result>
}


export namespace DeleteClientsUseCase {

    export type id = string
    export type Result = boolean
}