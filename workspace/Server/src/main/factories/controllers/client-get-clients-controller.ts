import { Controller } from "../../../presentation/protocols";
import { ClientGetAllController } from "../../../presentation/controllers";
import { makeDbGetClientsUseCase } from "../use-case/";



export const makeClientGetClientsController = (): Controller => {
    const controller = new ClientGetAllController(makeDbGetClientsUseCase());

    return controller;
}