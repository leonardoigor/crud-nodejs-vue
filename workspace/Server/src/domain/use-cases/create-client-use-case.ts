import { HttpResponse } from "../../presentation/protocols"

export interface CreatClientUseCase {
    handle: (param: CreatClientUseCase.Params) => Promise<CreatClientUseCase.Result>
}


export namespace CreatClientUseCase {
    export type Params = {
        id: string | null
        document: string
        name: string
        email: string
        phone: string
    }

    export type Result = HttpResponse
}