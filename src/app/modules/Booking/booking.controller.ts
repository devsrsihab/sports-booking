import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { BookingServices } from './booking.service';
import sendResponse from '../../utils/sendResponse';
import { getCurrentDate } from './booking.utils';

// create booking
const createBooking = catchAsync(async (req, res) => {
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
const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB();
  // if data is not found
  if (result.length === 0) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: result,
    });
  }

  // if data is found
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings retrieved successfully',
    data: result,
  });
});

// get booked by user
const getBookingsByUser = catchAsync(async (req, res) => {
  const { userEmail } = req.user;
  const result = await BookingServices.getBookingsByUserFromDB(userEmail);

  // if data is not found
  if (result.length === 0) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: result,
    });
  }

  // if data is found
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings retrieved successfully',
    data: result,
  });
});

// cancel booking
const cancelBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookingServices.cancelBookingFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking canceled successfully',
    data: result,
  });
});

// check Availability
const checkAvailability = catchAsync(async (req, res) => {
  const date = req.query?.date?.toString() ?? getCurrentDate();

  const result = await BookingServices.checkAvailability(date);
  // if data is not found
  if (result.length === 0) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: result,
    });
  }

  // if data is found
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Availability retrieved successfully',
    data: result,
  });
});

// export controllers
export const BookingControllers = {
  createBooking,
  getAllBookings,
  getBookingsByUser,
  cancelBooking,
  checkAvailability,
};
