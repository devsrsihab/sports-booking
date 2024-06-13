import { model, Schema } from 'mongoose';
import { TBooking } from './booking.interface';

// Booking schema
const BookingSchema = new Schema<TBooking>({
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  facility: {
    type: Schema.Types.ObjectId,
    ref: 'Facility',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  payableAmount: {
    type: Number, 
    required: true,
  },
  isBooked: {
    type: String,
    required: true,
    enum: ['confirmed', 'unconfirmed', 'canceled'],
    default: 'confirmed', 
  },
});

// make model
export const Booking = model<TBooking>('Booking', BookingSchema);
