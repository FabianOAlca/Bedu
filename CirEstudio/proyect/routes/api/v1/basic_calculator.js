import express from 'express';
import controller from '../../../controllers/api/v1/basic_calculator_controller'

const router = express.Router();

router.get('/', controller.index);
router.post('/addition', controller.addition);
router.post('/minus',controller.minus);
router.post('/multy',controller.multy);

export default router;