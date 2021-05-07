


export class DeleteClientRepository {
    delete: (param: string) => Promise<DeleteClientRepository.Result>
}

export namespace DeleteClientRepository {
    export type Result = boolean
}