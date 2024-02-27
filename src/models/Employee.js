import mongoose from 'mongoose';
import Company from './Company';

const EmployeeModelSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: Number, required: false },
    company: { type: mongoose.Types.ObjectId, ref: 'companies', required: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: {type: Date, default: Date.now}
});

const Employee = new mongoose.model('employees', EmployeeModelSchema);