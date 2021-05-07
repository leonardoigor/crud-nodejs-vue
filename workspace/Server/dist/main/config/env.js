"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = {
    mongoUrl: process.env.MONGO_URL || 'mongodb+srv://igor:pGtSzeR23Eja7ZzT@cluster0.6c9v0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    // mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/api',
    port: process.env.PORT || 5050,
    jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}