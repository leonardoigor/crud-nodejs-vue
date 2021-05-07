import { HttpResponse } from './../../presentation/protocols'
import { EmailAlreadyExist, ServerError, UnauthorizedError } from './../../presentation/errors'

export const badRequest = (error: Error): HttpResponse => ({
  status: 400,
  body: error
})
export const badRequestWithContent = (data: any): HttpResponse => ({
  status: 400,
  body: { message: data }
})

export const forbidden = (error: Error): HttpResponse => ({
  status: 403,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  status: 401,
  body: new UnauthorizedError()
})
export const emailExist = (paramName: string): HttpResponse => ({
  status: 400,
  body: new EmailAlreadyExist(paramName)
})

export const serverError = (error: Error): HttpResponse => ({
  status: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  status: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  status: 204,
  body: null
})
