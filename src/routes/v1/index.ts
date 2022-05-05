import express from "express"
import authRoute from "./auth.route"
import articleRoute from "./article.route"

const router = express.Router()

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute
  },
  {
    path: '/article',
    route: articleRoute
  }
]

defaultRoutes.forEach((item) => {
  router.use(item.path, item.route)
})

export default router