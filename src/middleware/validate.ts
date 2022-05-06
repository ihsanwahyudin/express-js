import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import httpStatus from "http-status"
import pick from "../utils/pick"
import ApiError from "../utils/ApiError"

const validate = (schema: { [x: string]: any }) => (req: Request, res: Response, next: NextFunction) => {
  const validSchema = pick(schema, ['params', 'query', 'body'])
  const object = pick(req, Object.keys(validSchema))
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object)
    
  if (error) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
      message: "Validation failed",
      errors: error.details.map(err => {
        return {
          message: err.message,
          name: err.context?.key
        }
      })
    })
  }
  Object.assign(req, value)
  return next()
}

export default validate