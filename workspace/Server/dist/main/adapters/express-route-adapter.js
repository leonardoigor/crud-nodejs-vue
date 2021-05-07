"use strict";Object.defineProperty(exports, "__esModule", {value: true});



 const adaptRoute = (controller) => {
  return async (req, res) => {
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
}; exports.adaptRoute = adaptRoute
