import express from 'express'
import controller from '../../../controllers/api/v1/movies_controller'

const router = express.Router()

router.get('/',controller.index)

export default router