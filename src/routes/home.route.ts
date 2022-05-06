import express, { Request, Response } from "express"

const router = express.Router()

router
  .route('/')
  .post((_req: Request, res: Response) => {
    res.json({
      message: "Request method POST"
    })
  })
  .get((_req: Request, res: Response) => {
    res.json({
      message: "Request method GET"
    })
  })

export default router