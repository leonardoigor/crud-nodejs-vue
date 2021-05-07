import { ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";
import { UpdateClientsUseCase } from '../../domain/use-cases'


export class ClientUpdateController implements Controller {

    constructor(
        private readonly updateClientUseCase: UpdateClientsUseCase
    ) { }

    async handle(param: UpdateClientsUseCase.Param): Promise<HttpResponse> {

        try {
            await this.updateClientUseCase.handle(param);
            return ok('Atualizado com sucesso');
        } catch (error) {
            return serverError(error)
        }
    }
}