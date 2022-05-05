const database = {
  driver: {
    mongodb: {
      URI: "mongodb://127.0.0.1:27017/rest-api",
      port: 27017
    }
  },
  credential: {
    user: "",
    password: ""
  }
}

export default database