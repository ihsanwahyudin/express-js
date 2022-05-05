const logger = {
  channel: {
    application: {
      filename: "application.log",
      path: "./",
      format: "default"
    },
    database: {
      filename: "database.log",
      path: "./",
      format: "default"
    }
  }
}

export default logger