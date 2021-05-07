import { Controller } from './../../presentation/protocols'

import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    }
    const httpResponse = await controller.handle(request)
    if (httpResponse.body.status) {
      return res.status(httpResponse.body.status).json(httpResponse.body)

    }

    if (httpResponse.status >= 200 && httpResponse.status <= 299) {

      return res.status(httpResponse.status).json(httpResponse.body)

    } else {

      res.status(httpResponse.status).json({
        error: httpResponse.body.message
      })
    }
  }
}
