import moment from "moment"

export default class LogFormat {
  static create(message: string) {
    const times = moment().format("YYYY-MM-DD hh:mm:ss")
    return `[${times}]: ${message}`
  }
}