import { Controller } from "../../../presentation/protocols";
import { ClientCreateController } from "../../../presentation/controllers";
import { makeDbCreateClientUseCase } from "../use-case/";



export const makeClientCreateController = (): Controller => {
    const controller = new ClientCreateController(makeDbCreateClientUseCase());

    return controller;
}