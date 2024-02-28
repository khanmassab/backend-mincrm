import userController from "../controllers/user.controller.js";
import express from 'express';
import passport from "passport";

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), userController.listUsers);
router.post('/find', passport.authenticate('jwt', { session: false }), userController.findUsers);

export default router;