import express from 'express';
const router = express.Router();

import {
  addServiceFee,
  getServiceFees,
  getServiceFee,
  updateServiceFee,
  deleteServiceFee,
} from '../controllers/servicefee.controller';

router.post('/', addServiceFee);
router.get('/', getServiceFees);
router.get('/:id', getServiceFee);
router.delete('/:id', deleteServiceFee);
router.put('/:id', updateServiceFee);

export default router;
