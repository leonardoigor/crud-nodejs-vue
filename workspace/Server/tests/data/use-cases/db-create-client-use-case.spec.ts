import { DbCreatClientUseCase } from '../../../src/data/use-cases'
import { CreatClientParams } from './../../domain/mocks'
import { CheckClientByEmailRepositorySpy } from './../mocks'

type SutTypes = {
    sut: DbCreatClientUseCase,
    checkClientByEmailRepositorySpy: CheckClientByEmailRepositorySpy
}


const makeSut = (): SutTypes => {
    const checkClientByEmailRepositorySpy = new CheckClientByEmailRepositorySpy();
    const sut = new DbCreatClientUseCase(checkClientByEmailRepositorySpy);

    return {
        sut, checkClientByEmailRepositorySpy
    }
}



describe('DbCreateClient UseCase', () => {


    test('Should return true if emails already not exist', async () => {
        const { sut } = makeSut()
        const createClientParams = CreatClientParams()

        expect(await sut.handle(createClientParams)).toBe(true)
    })
    test('Should return false if emails already exist', async () => {
        const { sut, checkClientByEmailRepositorySpy } = makeSut()
        checkClientByEmailRepositorySpy.result = true
        const createClientParams = CreatClientParams()

        expect(await sut.handle(createClientParams)).toBe(false)
    })
})
