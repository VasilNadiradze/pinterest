import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB")
  } catch (error) {
    console.log("DB connection error", error);
  }
};

export default connectDB;
