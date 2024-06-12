import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { AuthControllers } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

// signup route for suer
router.post(
  '/signup',
  validateRequest(AuthValidation.userSignupValidationSchema),
  AuthControllers.signupUser,
);

export const AuthRoutes = router;
