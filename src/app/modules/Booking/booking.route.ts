import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookingValidations } from './booking.validation';
import { BookingControllers } from './booking.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middlewares/auth';

const router = express.Router();

// create facility
router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(BookingValidations.createBookingValidationSchema),
  BookingControllers.createBookingIntoDB,
);

// get all bookings
router.get('/', auth(USER_ROLE.admin), BookingControllers.getAllBookingsFromDB);

export const BookingRoute = router;
