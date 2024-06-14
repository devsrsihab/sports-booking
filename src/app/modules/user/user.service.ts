/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  const { password, ...others } = result.toJSON();
  return others;
};

export const UserServices = {
  createUserIntoDB,
};
