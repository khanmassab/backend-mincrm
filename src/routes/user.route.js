import userController from "../controllers/user.controller.js";
import express from 'express';

const router = express.Router();

router.get('/', userController.listUsers);
router.post('/find', userController.findUsers);

export default router;