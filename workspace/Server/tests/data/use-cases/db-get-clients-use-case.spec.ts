import { DbGetClientsUseCase } from "../../../src/data/use-cases";



type SutTypes = {
    sut: DbGetClientsUseCase,
}

const makeSut = (): SutTypes => {
    const sut = new DbGetClientsUseCase();
    return {
        sut
    }
}



describe('DbGetClients UseCase', () => {
    test('Should return array of  ClientEntity', async () => {
        const { sut } = makeSut()
        let b = await sut.handle()


        expect(b).toEqual([])
    })
})