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
  isDeleted: {
    type: Boolean,
    default: false,
  },
});


// filter out deleted documents
facilitySchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

facilitySchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

facilitySchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});


// make a model
export const Facility = model<TFacility>('Facility', facilitySchema);
