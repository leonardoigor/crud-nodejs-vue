import { ok, serverError, badRequestWithContent, badRequest } from "../helpers";
import { Controller, HttpResponse } from "../protocols";
import { DeleteClientsUseCase } from '../../domain/use-cases'
import { HasId } from "../validation/has-id";


export class ClientDeleteController implements Controller {

    constructor(
        private readonly deleteClientsUseCase: DeleteClientsUseCase,
        private readonly hasId: HasId
    ) { }

    async handle(param: DeleteClientsUseCase.id): Promise<HttpResponse> {

        let error = (this.hasId.validate(param))
        if (error) return badRequest(error)

        try {
            let result = await this.deleteClientsUseCase.handle(param);
            if (result) {
                return ok(result);
            }
            return badRequestWithContent({ error: 'Error' })
        } catch (error) {
            return serverError(error)
        }
    }
}