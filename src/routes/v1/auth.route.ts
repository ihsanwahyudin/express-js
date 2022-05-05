import express, { Request, Response } from "express"

const router = express.Router()

router.post('/register', (req: Request, res: Response) => {
  req.on("data", (data) => {
    res.json({
      data: data.toString()
    })
  })
})
router.post('/login', (req: Request, res: Response) => {
  req.on("data", (data) => {
    res.json({
      data: data.toString()
    })
  })
})
router.post('/logout', (req: Request, res: Response) => {
  req.on("data", (data) => {
    res.json({
      data: data.toString()
    })
  })
})

export default router