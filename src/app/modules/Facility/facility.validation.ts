import { z } from 'zod';

// create validation
const createFacilityValidationSchema = z.object({
  body: z.object({
    name: z.string({required_error:'Name is required'}),
    description: z.string({required_error:'Description is required'}),
    pricePerHour: z.number({required_error:'Price Per hour is required'}),
    location: z.string({required_error:'Location is required'}),
  }),
});

// update validation
const updateFacilityValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    pricePerHour: z.number().optional(),
    location: z.string().optional(),
  }),
});

// export validation
export const FacilityValidations = {
  createFacilityValidationSchema,
  updateFacilityValidationSchema,
};
