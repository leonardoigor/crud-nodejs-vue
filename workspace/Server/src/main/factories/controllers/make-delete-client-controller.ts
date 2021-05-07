import { Controller } from "../../../presentation/protocols";
import { ClientDeleteController } from "../../../presentation/controllers";
import { makeDbDeleteClientUseCase } from "../use-case";
import { makeHasId } from "./make-has-id";



export const makeClientDeleteController = (): Controller => {

    const controller = new ClientDeleteController(
        makeDbDeleteClientUseCase(), makeHasId()
    );

    return controller;
}