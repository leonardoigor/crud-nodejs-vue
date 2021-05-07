import faker from 'faker'

import {
    CreatClientUseCase,
    UpdateClientsUseCase,
    DeleteClientsUseCase
} from './../../../src/domain/use-cases'



export const CreatClientParams = (): CreatClientUseCase.Params => ({
    phone: faker.phone.phoneNumber(),
    document: faker.internet.userName(),
    email: faker.internet.email(),
    name: faker.name.findName(),
    id: faker.random.alphaNumeric(),
})
export const UpdateClientParams = (): UpdateClientsUseCase.Param => ({
    phone: faker.phone.phoneNumber(),
    document: faker.internet.userName(),
    email: faker.internet.email(),
    name: faker.name.findName(),
    id: faker.random.alphaNumeric(),
})
export const DeleteClientParams = (): DeleteClientsUseCase.id => faker.internet.mac()