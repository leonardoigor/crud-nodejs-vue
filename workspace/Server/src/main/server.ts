import { MongoHelper } from "../infra/db/mongo-db";
import env from "./config/env";



MongoHelper.connect(env.mongoUrl).then(async () => {
    const app = (await import('./config/app')).default;
    app.listen(env.port, () => console.log(`Server Running at http://localhost:${env.port}`))
})