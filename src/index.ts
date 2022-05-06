import mongoose from "mongoose"
import app from "./app"
import config from "./config/app"
import connect from "./database/connect"
import log from "./logger"

let server: any
const host: string = config.host
const port: number = config.port
connect().then((_value: typeof mongoose) => {
  server = app.listen(port,() => {
    log.channel("application", "info", `Server is running at http://${host}:${port}`)
    console.info(`⚡️[server]: Server is running at http://${host}:${port}`)
  })
})

const exitHandler = () => {
  if (server) {
    server.close(() => {
      log.channel("application", "info", `Server closed`)
      console.info(`⚡️[server]: Server closed at http://${host}:${port}`)
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error: object | undefined) => {
  log.channel("application", "error", `Server error`, error)
  console.info(`⚡️[server]: Server error can't run at http://${host}:${port}`)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  console.info(`⚡️[server]: SIGTERM received`)
  log.channel("application", "info", `SIGTERM received`)
  if (server) {
    server.close()
  }
})