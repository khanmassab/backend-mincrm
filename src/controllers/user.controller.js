import User from '../models/User.js'


const userController = {

    listUsers: async (req, res) => {
        try {
            const users = await User.find();

            res.status(201).send({ users });
        } catch (error) { return new Error(error) }
    },

    findUsers: async (req, res) => {
        try {
            const users = await User.findOne(req.body);

            res.status(201).send({ users });
        } catch (error) { return new Error(error) }
    }

}


export default userController;