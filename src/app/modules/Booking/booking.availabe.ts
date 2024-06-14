import express from 'express';
import { BookingControllers } from './booking.controller';

const router = express.Router();

// check avalability
router.get('/', BookingControllers.checkAvailability);

export const BookingAvailableRoute = router;
