import express from 'express';
const router = express.Router();

import {
  addService,
  getServices,
  getService,
  updateService,
  deleteService,
} from '../controllers/service.controller';

router.post('/', addService);
router.get('/', getServices);
router.get('/:id', getService);
router.delete('/:id', deleteService);
router.put('/:id', updateService);

export default router;
