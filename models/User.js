import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLenght: [3, "Fill atleast 3 characters"],
      // trim:true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Dublicate email "],
      minLength: [8, "Fill atleast 8 characters"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [10000, "min salary will be 10000 "],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    image: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
