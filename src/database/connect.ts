import mongoose from "mongoose"
import database from "../config/database"
import log from "../logger"
import Schema from "./schema"

async function connect() {
  const dbURI: string = database.driver.mongodb.URI

  return mongoose.connect(dbURI)
  .then((value: typeof mongoose) => {
    console.info(`⚡️[database]: Database connected to ${dbURI}`);
    log.channel("database", "info", "Database connected !")
    Schema.run()
    return value
  })
  .catch((err) => {
    console.info(`⚡️[database]: Database connection failed to ${dbURI}`);
    log.channel("database", "error", "Database connection failed !", err)
    process.exit()
  })
}

export default connect