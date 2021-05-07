import { ClientRepository } from "@/infra/db/mongo-db";
import { DeleteClientsUseCase } from "../../domain/use-cases";




export class DbDeleteClientsUseCase implements DeleteClientsUseCase {
    constructor(
        private readonly DeleteClientRepository: ClientRepository
    ) { }

    async handle(param: string): Promise<boolean> {
        return this.DeleteClientRepository.delete(param);

    }
}