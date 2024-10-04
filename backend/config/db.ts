import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGO_URI as string;
  try {
    await mongoose.connect(uri);
    console.log("database connected");
  } catch (error: any) {
    console.error(`error connecting database: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
