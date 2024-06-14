import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacilityValidations } from './facility.validation';
import { FacilityControllers } from './facility.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

// create facility
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(FacilityValidations.createFacilityValidationSchema),
  FacilityControllers.createFacility,
);

// get all facilities
router.get('/', FacilityControllers.getAllFacilities);

// update facility
router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(FacilityValidations.updateFacilityValidationSchema),
  FacilityControllers.updateFacility,
);

// delete facility
router.delete('/:id',auth(USER_ROLE.admin), FacilityControllers.deleteFacility);

export const FacilityRoute = router;
