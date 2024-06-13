import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';
import { Facility } from '../Facility/facility.model';

// create booking
const createBookingIntoDB = async (payload: TBooking) => {
  // user id
  const user = await User.findOne({ email: payload.user });
  // push the user id in to payload
  if (user) {
    payload.user = user._id;
  }

  // facility id
  const facility = await Facility.findOne({ _id: payload.facility });
  // push the facility id in to payload
  if (!facility) {
    throw new AppError(httpStatus.NOT_FOUND, 'Facility not found');
  }

  // calculated payable ammount
  const { pricePerHour } = facility;
  payload.payableAmount =
    (parseInt(payload.endTime) - parseInt(payload.startTime)) * pricePerHour;

  // create booking
  const result = await Booking.create(payload);
  return result;
};

// get all bookings
const getAllBookingsFromDB = async () => {
  const result = await Booking.find().populate('facility').populate('user');
  return result;
};

// view booked by user
const getBookingsByUserFromDB = async (email: string) => {
  // find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  const result = await Booking.find({ user: user._id }).populate('facility');
  return result;
};

// export booking
export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getBookingsByUserFromDB,
};
