import companyController from "../controllers/company.controller.js";
import express from 'express';

const router = express.Router();

router.get('/', companyController.listing);
router.get('/:id', companyController.show);
router.post('/', companyController.store);
router.put('/:id', companyController.update);
router.delete('/:id', companyController.delete);

export default router;