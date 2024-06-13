import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { BookingServices } from './booking.service';
import sendResponse from '../../utils/sendResponse';

// create booking
const createBookingIntoDB = catchAsync(async (req, res) => {
  // authorization token info
  const { userEmail } = req.user;
  // push the userEmail into body
  const payload = { ...req.body, user: userEmail };
  // send requestt to service
  const result = await BookingServices.createBookingIntoDB(payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created successfully',
    data: result,
  });
});

// get all bookings
const getAllBookingsFromDB = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings retrieved successfully',
    data: result,
  });
});

// export controllers
export const BookingControllers = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
