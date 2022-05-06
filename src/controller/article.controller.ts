import { Request, Response, NextFunction } from "express"
import httpStatus from "http-status"
import pick from "../utils/pick"
import ApiError from "../utils/ApiError"
import catchAsync from "../utils/catchAsync"
import articleService from "../services/article.service"

const createArticle = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const article = await articleService.create(req.body)
    res.status(httpStatus.CREATED).json(article)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
  }
})

const getAllArticles = catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const articles = await articleService.getAll()
    res.status(httpStatus.OK).json(articles)
  } catch (error) {
    
  }
})

export default {
  createArticle,
  getAllArticles
}