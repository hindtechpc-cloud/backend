import mongoose from "mongoose";
import "dotenv/config";
export const connectDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_DB_URI);
    if(connected){
        console.log("mongoDB connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
