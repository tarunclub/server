import mongoose, { model, Schema, Types } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface IRole {
  name: string;
  permissions: string[];
}

const roleSchema = new Schema<IRole>({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  permissions: {
    type: [String],
    required: true,
    trim: true,
  },
});

const userSchema = new Schema<IUser>(
  {
    name: {
      type: 'String',
      required: true,
      trim: true,
    },
    email: {
      type: 'String',
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: 'String',
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model<IUser>('User', userSchema);
const Role = model<IRole>('Role', roleSchema);

export default User;
