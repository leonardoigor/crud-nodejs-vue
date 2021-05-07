import { Controller, HttpResponse } from "../protocols";
import { GetClientUseCase } from './../../domain/use-cases'
import { ok, badRequestWithContent } from "./../../presentation/helpers";



export class ClientFindController implements Controller {

    constructor(
        private readonly clientFIndUseCase: GetClientUseCase
    ) { }


    async handle(request: GetClientUseCase.Result): Promise<HttpResponse> {

        try {
            const result = await this.clientFIndUseCase.handle(request.id)
            console.log(result, 'result');
            if (result !== null) return ok(result)


            return badRequestWithContent('User not find')
        } catch (error) {
            return badRequestWithContent('some error on request')

        }
    }
}