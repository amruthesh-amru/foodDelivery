import express from 'express'
import { addFood, editFood, listfood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = express.Router()
//image storing process
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({ storage: storage })

foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listfood)
foodRouter.post("/remove", removeFood)
foodRouter.post("/edit", upload.single("image"), editFood)

export default foodRouter
