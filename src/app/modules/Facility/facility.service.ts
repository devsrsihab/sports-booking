import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";



// create facility
const createFacilityIntoDB = async (payload: TFacility) => {
  const result = await Facility.create(payload);
  return result;
};

// get all facilities
const getAllFacilitiesFromDB = async () => {
  const result = await Facility.find();
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

// delete facility
const deleteFacilityFromDB = async (id: string) => {
  const result = await Facility.deleteOne({ _id: id });
  return result;
};


// expost controllers
export const FacilityServices = {
  createFacilityIntoDB,
  updateFacilityIntoDB,
  getAllFacilitiesFromDB,
  deleteFacilityFromDB,
};