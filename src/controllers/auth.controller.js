import User from '../models/User.js'
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

const authController = {
    register: async (req, res) => {
        try {
            if (User.isEmailTaken(req.body.email)) {
                return res.status(422).send({ "message": "Email Already Registered" });
            }
            
            const user = await User.create(req.body);
            res.status(201).send({ user });
        } catch (error) {
            res.status(400).json({ error: "Registration failed" });
        }
    },
    login: async (req, res) => {
        try {
            if (User.compareHash(req.body.email)) {
                const user = await User.findOne({ 'email': req.body.email });
                const token = jwt.sign(user.toJSON(), process.env.PASSPORT_SECRET);
                res.status(200).send({token})
            } else {
                res.status(401).json({ message: 'Authentication failed' });
            }
        } catch (error) {
            console.log(error);
        }
    }
}


export default authController;