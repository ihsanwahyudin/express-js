import Logger from "logger"
import util from "util"
import logger from "../config/logger";

enum channel {
  application,
  database
}

enum Level {
  error,
  warn,
  info,
  debug,
}

type LogLevel = keyof typeof Level;
type ChannelList = keyof typeof channel;

const log = {
  channel: (name: ChannelList, level: LogLevel, message: string, extras?: object) => {
    if(logger['channel'][name]) {
      const filename: string = logger['channel'][name]['filename']
      const path: string = logger['channel'][name]['path']
      const createLog = Logger.createLogger(`${__dirname}/../storage/logs/${path + filename}`)
      createLog[level](message, extras? util.format(extras) : '')
    }
  }
}

export default log