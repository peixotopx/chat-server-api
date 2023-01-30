import 'dotenv/config.js'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import http from 'http'
import * as socketio from 'socket.io'

import routes from './routes'
import { ErrorCatcher } from './middlewares/ErrorCatcher'

import './database/connection'
const app = express()
const server = http.createServer(app)

// necessário abaixo para publicação no Azure App Web
const io = new socketio.Server(server, {
    perMessageDeflate :false
});

// Se não for publicar na Azure App Service
// const io = new socketio.Server(server);

app.use(cors());
app.use(express.json());
app.use(routes)
app.use(ErrorCatcher)

export { io, server }