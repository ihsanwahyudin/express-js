import express, { Request, Response } from "express"
import articleController from "../controller/article.controller"
import validate from "../middleware/validate"
import articleValidation from "../validations/article.validation"

const router = express.Router()

router
  .route('/')
  .get(articleController.getAllArticles)
  .post(validate(articleValidation.createArticle), articleController.createArticle)

router
  .route('/:id')
  .get((req: Request, res: Response) => {
    res.json({
      message: "Request method GET",
      data: req.params.id
    })
  })
  .patch((req: Request, res: Response) => {
    res.json({
      message: "Request method PATCH",
      data: req.params.id
    })
  })
  .delete((req: Request, res: Response) => {
    res.json({
      message: "Request method DELETE",
      data: req.params.id
    })
  })

export default router