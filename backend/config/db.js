import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://amruthesh:280767@cluster0.d28107g.mongodb.net/food-delivery').then(() => console.log("DB connected"))
}

