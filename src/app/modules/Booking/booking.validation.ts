import { z } from 'zod';

// create validation
const createBookingValidationSchema = z.object({
  body: z.object({
    date: z.string({ required_error: 'Date is required' }),
    startTime: z.string({ required_error: 'Start Time is required' }),
    endTime: z.string({ required_error: 'End Time is required' }),
    facility: z.string({ required_error: 'Facility is required' }),
    payableAmount: z.number({ required_error: 'Payable Amount is required' }),
  }),
});

// update validation
const updateBookingValidationSchema = z.object({
  body: z.object({
    date: z.date().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    facility: z.string().optional(),
    payableAmount: z.number().optional(),
  }),
});

// export validation
export const BookingValidations = {
  createBookingValidationSchema,
  updateBookingValidationSchema,
};
