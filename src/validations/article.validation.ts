import Joi from "joi";

const createArticle = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().required(),
  }),
};

const updateArticle = {
  params: Joi.object().keys({
    id: Joi.required()
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().required(),
      content: Joi.string().required(),
      author: Joi.string().required(),
    })
    .min(1),
};

const deleteArticle = {
  params: Joi.object().keys({
    id: Joi.string()
  }),
};

export default {
  createArticle,
  updateArticle,
  deleteArticle,
};