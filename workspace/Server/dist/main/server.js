"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongodb = require('../infra/db/mongo-db');
var _env = require('./config/env'); var _env2 = _interopRequireDefault(_env);



_mongodb.MongoHelper.connect(_env2.default.mongoUrl).then(async () => {
    const app = (await Promise.resolve().then(() => require('./config/app'))).default;
    app.listen(_env2.default.port, () => console.log(`Server Running at http://localhost:${_env2.default.port}`))
})