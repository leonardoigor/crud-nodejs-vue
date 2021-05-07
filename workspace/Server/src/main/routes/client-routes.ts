import { Router } from "express";
import {
    makeClientCreateController,
    makeClientGetClientsController,
    makeDbUpdateClientUseCase,
    makeClientDeleteController,
    makeClientFindController
} from "../factories/controllers";
import { adaptRoute } from './../adapters/'


export default (router: Router): void => {


    router.get('/get-all', adaptRoute(makeClientGetClientsController()))
    router.post('/create', adaptRoute(makeClientCreateController()))
    router.post('/update', adaptRoute(makeDbUpdateClientUseCase()))
    router.post('/delete', adaptRoute(makeClientDeleteController()))
    router.post('/find', adaptRoute(makeClientFindController()))
}