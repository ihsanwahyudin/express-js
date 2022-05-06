import httpStatus from "http-status"
import Article from "../model/article"
import ApiError from "../utils/ApiError"

interface ArticleBody {
  title: string;
  content: string;
  author: string;
}

const getAll = () => {
  return Article.find()
}

const create = (body: ArticleBody) => {
  return Article.create(body)
};

export default {
  create,
  getAll
}