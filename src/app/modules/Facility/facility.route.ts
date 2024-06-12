import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacilityValidations } from './facility.validation';
import { FacilityControllers } from './facility.controller';

const router = express.Router();

// create facility
router.post(
  '/',
  validateRequest(FacilityValidations.createFacilityValidationSchema),
  FacilityControllers.createFacility,
);

// get all facilities
router.get('/', FacilityControllers.getAllFacilities);

// update facility
router.put(
  '/:id',
  validateRequest(FacilityValidations.updateFacilityValidationSchema),
  FacilityControllers.updateFacility,
);

// delete facility
router.delete('/:id', FacilityControllers.deleteFacility);

export const FacilityRoute = router;
