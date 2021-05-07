import { ok, serverError } from "./../../presentation/helpers";
import { Controller, HttpResponse } from "../protocols";
import { GetClientsUseCase } from './../../domain/use-cases'


export class ClientGetAllController implements Controller {

    constructor(
        private readonly getClientUseCase: GetClientsUseCase
    ) { }

    async handle(): Promise<HttpResponse> {
        try {
            const result = await this.getClientUseCase.handle();

            return ok(result);
        } catch (error) {
            return serverError(error)
        }
    }
}