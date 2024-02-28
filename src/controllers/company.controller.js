import Company from '../models/Company.js'

const companyController = {
    listing: async (req, res) => {
        try {
            const companies = await Company.find();
            res.json(companies);
        } catch (error) {
            res.json({ message: error.message });;
        }
    },
    show: async (req, res) => {
        try {
            const company = await Company.findById(req.params.id);
            if (company) {
                res.json(company);
            } else {
                res.status(404).json({ message: 'Company not found' });
            }
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    store: async (req, res) => {
        req.body.logo = req.protocol + '://' + req.get("host") + '/uploads/' + req.files[0].filename;
        const company = new Company(req.body);
        try {
            const newCompany = await company.save();
            res.status(201).json(newCompany);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    update: async (req, res) => {
        try {
            req.body.logo = req.protocol + '://' + req.get("host") + '/uploads/' + req.files[0].filename;
            const company = await Company.updateOne({ _id: req.params.id }, { $set: req.body });
            const updated = await Company.findById(req.params.id);
            if (company) {
                return res.status(200).json(updated);
            } else {
                res.send(404).json({ message: 'Company not found' });
            }
        } catch (error) {
            return error;
        }
    },
    delete: async (req, res) => {
        try {
            const company = await Company.deleteOne({_id: req.params.id});
            if (company) {
                res.status(204).json({ message: 'Company deleted' });
            } else {
                res.status(404).json({ message: 'Company not found' });
            }
        } catch (error) {
            res.json({ message: error.message });
        }
    }
}

export default companyController;