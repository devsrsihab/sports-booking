import { model, Schema } from 'mongoose';
import { TFacility } from './facility.interface';

// facility model schema
const facilitySchema = new Schema<TFacility>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

// make a model
export const Facility = model<TFacility>('Facility', facilitySchema);
