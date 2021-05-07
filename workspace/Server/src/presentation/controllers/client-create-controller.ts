import { ok, serverError } from "./../../presentation/helpers";
import { Controller, HttpResponse } from "../protocols";
import { CreatClientUseCase } from './../../domain/use-cases'


export class ClientCreateController implements Controller {

    constructor(
        private readonly createClientUseCase: CreatClientUseCase
    ) { }

    async handle(param: CreatClientUseCase.Params): Promise<HttpResponse> {

        try {
            const result = await this.createClientUseCase.handle(param);

            return ok(result);
        } catch (error) {
            return serverError(error)
        }
    }
}