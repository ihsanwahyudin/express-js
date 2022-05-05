import express, { Request, Response } from "express"

const router = express.Router()

router
  .route('/')
  .post((req: Request, res: Response) => {
    req.on('data', (data) => {
      res.json({
        data: data
      })
    })
  })
  .get((req: Request, res: Response) => {
    req.on("data", (data) => {
      res.json({
        data: data
      })
    })
  })

router
  .route('/:articleId')
  .get((req: Request, res: Response) => {
    req.on('data', (data) => {
      res.json({
        data: data
      })
    })
  })
  .patch((req: Request, res: Response) => {
    req.on("data", (data) => {
      res.json({
        data: data
      })
    })
  })
  .delete((req: Request, res: Response) => {
    req.on("data", (data) => {
      res.json({
        data: data
      })
    })
  })

export default router