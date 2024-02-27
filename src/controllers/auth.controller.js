import User from '../models/User.js'


const authController = {
    register: async (req, res) => {
        try {
            console.log(req.body);
            const user = await User.create(req.body);
            res.status(201).send({ user });
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: "Registration failed" });
        }
    }
}


export default authController;