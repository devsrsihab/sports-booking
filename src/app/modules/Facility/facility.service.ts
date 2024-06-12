import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";



// create facility
const createFacilityIntoDB = async (payload: TFacility) => {
  const result = await Facility.create(payload);
  return result;
};

// expost controllers
export const FacilityServices = {
  createFacilityIntoDB,
};