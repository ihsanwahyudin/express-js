console.log(process.env)

const database = {
  driver: {
    mongodb: {
      URI: process.env.MONGODB_URI || "mongodb://127.0.0.1",
      database: process.env.MONGODB_DATABASE || "rest-api",
      port: process.env.MONGODB_PORT || "27017",
    }
  },
  credential: {
    user: "",
    password: ""
  }
}

export default database