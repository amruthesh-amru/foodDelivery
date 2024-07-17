import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js'
import Stripe from 'stripe'


const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY)

//placing user order from frontend
const placeOrder = async (req, res) => {

    const frontend_url = 'http://localhost:5173'

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} })

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 * 80,
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 2 * 100 * 80,
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,

        })
        res.json({ success: true, session_url: session.url })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "unable to process the payment" })
    }
}

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body
    try {
        if (success == 'true') {
            await orderModel.findByIdAndUpdate(orderId, { payment: true })
            res.json({ sucess: true, message: "paid" })
        } else {
            await orderModel.findByIdAndDelete(orderId)
            res.json({ success: false, message: "not paid" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in verifying the payment" })
    }
}

const userOrder = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId })
        if (orders) {
            return res.json({ sucess: true, orders })
        } else {
            return res.json({ sucess: false, message: "No orders Found" })
        }
    } catch (error) {
        console.log(error);
        return res.json({ sucess: false, message: "unable to retrive orders or order empty" })
    }
}
const listAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        if (orders) {
            return res.json({ success: true, data: orders })
        }
        return res.json({ success: true, message: "No orders placesd" })

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "error to fetch all the orders" })
    }
}
const updateFoodStatus = async (req, res) => {
    try {
        // let { orderId, status } = req.body;
        // console.log(orderId, status);
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status })
        return res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error Status Not Updated" })
    }

}

export { placeOrder, verifyOrder, userOrder, listAllOrders, updateFoodStatus }