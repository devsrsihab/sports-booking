import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ['admin', 'user'],
        message:
          "{VALUE} is not valid. Allowed values are 'admin', 'student', or 'teacher'",
      },
    },
  },
);

// pre middleware / hook: we will work ot it create() save()
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  //hasing password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  // next step
  next();
});

// post middleware / hook: we will work ot it create() save()
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// user exist cusotm static method
userSchema.statics.isUserExistByCustomId = async function (id: string) {
  return await User.findOne({ id }).select('+password');
};

// user exist cusotm static method
userSchema.statics.isPasswordMatch = async function (
  plainTextPassword: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

// check is the jwt token issued before password changed
userSchema.statics.isJWTIssuedBeforePasswordChanged = async function (
  passwordChangedTimeStamp: Date,
  jwtIssuedTimeStamp: number,
) {
  const passwordChangedTime = Math.round(
    new Date(passwordChangedTimeStamp).getTime() / 1000,
  );
  return passwordChangedTime > jwtIssuedTimeStamp;
};

// make model
export const User = model<TUser, UserModel>('User', userSchema);
