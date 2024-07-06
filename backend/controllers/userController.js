import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import mongoose from "mongoose";


//login user 
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ succes: false, message: "Password incorrect" })
        }
        const token = createToken(user._id)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ succes: false, message: "error" })
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRECT)
}

//register user 
const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const exist = await userModel.findOne({ email })
        if (exist) {
            return res.json({ success: false, message: "User already exists" })
        }
        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" })
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        return s.json({ success: false, message: "Unable to register" })
    }

}

export { loginUser, registerUser }