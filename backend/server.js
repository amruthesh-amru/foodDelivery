import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config

const app = express()
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//Db connection 
connectDB();

//api endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

//mongodb+srv://amruthesh:280767@cluster0.d28107g.mongodb.net/?