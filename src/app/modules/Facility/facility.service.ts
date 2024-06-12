import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";



// create facility
const createFacilityIntoDB = async (payload: TFacility) => {
  const result = await Facility.create(payload);
  return result;
};

// update facility
const updateFacilityIntoDB = async (id: string, payload: TFacility) => {
  const result = await Facility.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

// expost controllers
export const FacilityServices = {
  createFacilityIntoDB,
  updateFacilityIntoDB,
};