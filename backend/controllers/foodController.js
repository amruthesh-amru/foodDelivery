import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add food item
const addFood = async (req, res) => {
    try {
        let image_filename = `${req.file.filename}`
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        })
        await food.save()
        res.json({ success: true, message: "Food added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "data not saved " })
    }
}

//all food list
const listfood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({
            success: true,
            data: foods
        })
    } catch (error) {
        console.log("error while getting food list");
        res.json({
            success: false,
            error: "error while getting food list"
        })
    }
}

//edit food custpm
const editFood = async (req, res) => {
    try {
        const foodEdit = req.body.id;
        const food = await foodModel.findById(foodEdit)
        if (!food) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }
        if (food.image !== req.file.filename) {
            fs.unlink(`uploads/${food.image}`, (err) => {
                if (err) console.log(`Failed to delete old image: ${err.message}`);
            });
        }
        const updatedFood = await foodModel.findByIdAndUpdate(
            foodEdit,
            {
                name: req.body.name || food.name,
                description: req.body.description || food.description,
                price: req.body.price || food.price,
                category: req.body.category || food.category,
                image: req.file ? req.file.filename : food.image
            },
            { new: true, runValidators: true }
        );
        res.json({ success: true, message: "Food edited" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "data not edited" })
    }

}

//remove food 
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, () => { })
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({
            success: true,
            message: "food removed"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: "error removong food"
        })
    }
}
export { addFood, listfood, removeFood, editFood }