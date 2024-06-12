import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from '../user/user.service';
import { AuthServices } from './auth.service';

// signup controller
const signupUser = catchAsync(async (req, res) => {

  const result = await UserServices.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

// login user controller
const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { user, accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    token: accessToken,
    message: 'login successfully',
    data: user,
  });
});



export const AuthControllers = {
  signupUser,
  loginUser,
};
