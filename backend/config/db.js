import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://adelobajoshua19:09013902168Aj@cluster0.qkgnydf.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
