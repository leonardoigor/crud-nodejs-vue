import { ClientEntity } from "../../domain/entities";
import { UpdateClientsUseCase } from "../../domain/use-cases";
import { UpdateClientRepository } from "../protocols";




export class DbUpdateClientsUseCase implements UpdateClientsUseCase {
    constructor(private readonly updateClientRepository: UpdateClientRepository) { }

    async handle(param: ClientEntity): Promise<boolean> {
        return this.updateClientRepository.update(param);

    }
}