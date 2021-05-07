



import { Controller } from "../../../presentation/protocols";
import { ClientUpdateController } from "../../../presentation/controllers";
import { makeUpdateClientUseCase } from "../use-case";



export const makeDbUpdateClientUseCase = (): Controller => {
    const controller = new ClientUpdateController(makeUpdateClientUseCase());

    return controller;
}