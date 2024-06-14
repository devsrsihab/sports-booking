import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { FacilityRoute } from '../modules/Facility/facility.route';
import { BookingRoute } from '../modules/Booking/booking.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/facility',
    route: FacilityRoute,
  },
  {
    path: '/bookings',
    route: BookingRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
