import { z } from 'zod';

// time string formate
const timeStringSchema = z.string().refine(
  (time) => {
    const regex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    return regex.test(time);
  },
  {
    message: 'Please enter a valid time in the format HH:MM (24-hour format).',
  },
);

// year string formqte
const yearStringFormate = z
  .string({ required_error: 'Date is required' })
  .refine(
    (year) => {
      const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
      return regex.test(year);
    },
    {
      message:
        'Please enter a valid year in the format (YYYY-MM-DD).',
    },
  );

// create validation
const createBookingValidationSchema = z.object({
  body: z
    .object({
      date: yearStringFormate,
      startTime: timeStringSchema,
      endTime: timeStringSchema,
      facility: z.string({ required_error: 'Facility is required' }),
    })
    .refine(
      (body) => {
        const start = new Date(`1970-01-01T${body.startTime}`);
        const end = new Date(`1970-01-01T${body.endTime}`);
        return end > start;
      },
      {
        message: 'Start Time Should be before End Time',
      },
    ),
});

// update validation
const updateBookingValidationSchema = z.object({
  body: z
    .object({
      date: z.date().optional(),
      startTime: z.string().optional(),
      endTime: z.string().optional(),
      facility: z.string().optional(),
    })
    .refine(
      (body) => {
        const start = new Date(`1970-01-01T${body.startTime}`);
        const end = new Date(`1970-01-01T${body.endTime}`);
        return end > start;
      },
      {
        message: 'Start Time Should be before End Time',
      },
    ),
});

// export validation
export const BookingValidations = {
  createBookingValidationSchema,
  updateBookingValidationSchema,
};
