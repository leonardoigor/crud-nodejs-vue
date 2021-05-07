import { DbUpdateClientsUseCase } from "../../../src/data/use-cases";
import { UpdateClientSpy } from "../mocks";
import { UpdateClientParams } from './../../domain/mocks'



type SutTypes = {
    sut: DbUpdateClientsUseCase,
    updateClientSpy: UpdateClientSpy
}

const makeSut = (): SutTypes => {
    const updateClientSpy = new UpdateClientSpy()
    const sut = new DbUpdateClientsUseCase(updateClientSpy);
    return {
        sut, updateClientSpy
    }
}



describe('DbGetClients UseCase', () => {
    test('Should return true if client update correctly', async () => {
        const { sut, updateClientSpy } = makeSut()
        updateClientSpy.result = true
        let result = await sut.handle(UpdateClientParams())


        expect(result).toBe(true)
    })
    test('Should return false if  update get wrong', async () => {
        const { sut } = makeSut()
        let result = await sut.handle(UpdateClientParams())

        expect(result).toBe(false)
    })
})