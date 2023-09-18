import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MongoDB_URL not found");

  if (isConnected) {
    console.log("MongoDB connecction already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true; //set the connection status is true
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
