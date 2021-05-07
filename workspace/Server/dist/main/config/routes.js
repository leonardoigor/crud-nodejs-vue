"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _express = require('express');
var _fs = require('fs');



exports. default = (app) => {
    const router = _express.Router.call(void 0, )

    app.use('/api', router)
    _fs.readdirSync.call(void 0, `${__dirname}/../routes`).map(async file => {
        if (!file.endsWith('.map')) {
            (await Promise.resolve().then(() => require(`../routes/${file}`))).default(router)
        }
    })

}