import { Controller } from "../../../presentation/protocols";
import { ClientFindController } from "../../../presentation/controllers";
import { makeDbFindClientUseCase } from "../use-case";



export const makeClientFindController = (): Controller => {
    return new ClientFindController(makeDbFindClientUseCase());

}