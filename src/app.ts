import express, { Express, Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import routes from "./routes/index"
import ApiError from './utils/ApiError'
import cors from "cors"
import multer from "multer"

const app: Express = express()
const formData = multer()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.options('*', cors)
app.use('/', formData.none(), routes)
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: 'Request not found'
  })
})

export default app