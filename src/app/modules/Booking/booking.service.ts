import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TBooking, TimeSlot } from './booking.interface';
import { Booking } from './booking.model';
import { Facility } from '../Facility/facility.model';
import { totalSlots } from './booking.utils';

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

// cancel booking
const cancelBookingFromDB = async (id: string) => {
  const result = await Booking.findByIdAndUpdate(id, { isBooked: 'canceled' })
    .populate('facility')
    .select('-user');
  return result;
};

const checkAvailability = async (date: string) => {
  // Simulating booked time slots for a defined date (replace with actual DB query)
  const booked: TimeSlot[] = await Booking.find({ date }).select(
    'startTime endTime -_id',
  );

  // Function to remove overlapping slots
  function removeOverlappingSlots(
    timeSlots: TimeSlot[],
    removeSlots: TimeSlot[],
  ): TimeSlot[] {
    return timeSlots.filter((slot) => {
      // Convert times to minutes
      const slotStart = getTimeInMinutes(slot.startTime);
      const slotEnd = getTimeInMinutes(slot.endTime);

      // Check if the slot overlaps with any remove slot
      return !removeSlots.some((removeSlot) => {
        const removeStart = getTimeInMinutes(removeSlot.startTime);
        const removeEnd = getTimeInMinutes(removeSlot.endTime);

        // Check for overlap conditions
        if (slotEnd <= removeStart || slotStart >= removeEnd) {
          return false;
        } else {
          return true;
        }
      });
    });
  }

  // Function to convert time string to minutes
  function getTimeInMinutes(timeStr: string): number {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Filter
  const availableSlots = removeOverlappingSlots(totalSlots, booked);
  return availableSlots;
};

// export booking
export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getBookingsByUserFromDB,
  cancelBookingFromDB,
  checkAvailability,
};
