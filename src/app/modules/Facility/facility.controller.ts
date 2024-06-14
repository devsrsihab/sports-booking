import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FacilityServices } from './facility.service';

// create facility
const createFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.createFacilityIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Facility added successfully',
    data: result,
  });
});

// update facility
const updateFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacilityServices.updateFacilityIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Facility updated successfully',
    data: result,
  });
});

// get all facilities
const getAllFacilities = catchAsync(async (req, res) => {
  const result = await FacilityServices.getAllFacilitiesFromDB();
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
    message: 'Facilities retrieved successfully',
    data: result,
  });
});

// delete facility
const deleteFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacilityServices.deleteFacilityFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Facility deleted successfully',
    data: result,
  });
});

// export controllers
export const FacilityControllers = {
  createFacility,
  updateFacility,
  getAllFacilities,
  deleteFacility,
};
