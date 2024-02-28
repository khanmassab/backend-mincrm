import Employee from '../models/Employee.js'

const employeeController = {
    listing: async (req, res) => {
        try {
            const employees = await Employee.find();
            res.json(employees);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    show: async (req, res) => {
        try {
            const employee = await Employee.findById(req.params.id);
            if (employee) {
                res.json(employee);
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    store: async (req, res) => {
        const employee = new Employee(req.body);
        try {
            const newEmployee = await employee.save();
            res.status(201).json(newEmployee);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const employee = await updateOne({ _id: doc._id }, { $set: req.body });
            if (employee.save()) {
                return res.send(200).json(employee);
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const employee = await Employee.findById(req.params.id);
            if (employee) {
                await employee.remove();
                res.json({ message: 'Employee deleted' });
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default employeeController;