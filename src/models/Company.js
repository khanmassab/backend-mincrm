import mongoose from 'mongoose';


const CompanyModelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    logo: { type: String, required: false },
    website: {type: String, required: false}
});

const Company = new mongoose.model('companies', CompanyModelSchema);