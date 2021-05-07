import { DbDeleteClientsUseCase } from "../../../src/data/use-cases";
import { DeleteClientSpy } from "../mocks";
import { DeleteClientParams } from './../../domain/mocks'



type SutTypes = {
    sut: DbDeleteClientsUseCase,
    deleteClientSpy: DeleteClientSpy
}

const makeSut = (): SutTypes => {
    const deleteClientSpy = new DeleteClientSpy()
    const sut = new DbDeleteClientsUseCase(deleteClientSpy);
    return {
        sut, deleteClientSpy
    }
}



describe('DbGetClients UseCase', () => {
    test('Should return true if client update correctly', async () => {
        const { sut, deleteClientSpy } = makeSut()
        deleteClientSpy.result = true
        let result = await sut.handle(DeleteClientParams())


        expect(result).toBe(true)
    })
    test('Should return false if  update get wrong', async () => {
        const { sut } = makeSut()
        let result = await sut.handle(DeleteClientParams())

        expect(result).toBe(false)
    })
})