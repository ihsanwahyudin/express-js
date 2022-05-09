import mongoose from "mongoose"
import DBConfig from "../config/database"
import log from "../logger"
import Schema from "./schema"

async function connect() {
  const URI: string = DBConfig.driver.mongodb.URI
  const database: string = DBConfig.driver.mongodb.database
  const port: string = DBConfig.driver.mongodb.port
  const DBConnection = `${URI}:${port}/${database}`

  return mongoose.connect(DBConnection)
  .then((value: typeof mongoose) => {
    console.info(`⚡️[database]: Database connected to ${DBConnection}`);
    log.channel("database", "info", "Database connected !")
    Schema.run()
    return value
  })
  .catch((err) => {
    console.info(err)
    console.info(`⚡️[database]: Database connection failed to ${DBConnection}`);
    log.channel("database", "error", "Database connection failed !", err)
    process.exit()
  })
}

export default connect