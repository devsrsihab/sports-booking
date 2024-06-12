import { User } from '../user/user.model';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';

// create booking
const createBookingIntoDB = async (payload: TBooking) => {
  // user id
  const user = await User.findOne({ email: payload.user });
  // push the user id in to payload
  if (user) {
    payload.user = user._id;
  }
  // create booking
  const result = await Booking.create(payload);
  return result;
};

// export booking
export const BookingServices = {
  createBookingIntoDB,
};
