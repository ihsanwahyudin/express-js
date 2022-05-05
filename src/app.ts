import express, { Express, Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import routes from "./routes/v1/index"
import ApiError from './utils/ApiError'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/v1', routes)
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not Found'))
})

export default app