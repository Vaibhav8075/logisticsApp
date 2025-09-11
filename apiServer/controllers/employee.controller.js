import Employee from "../models/employee.model.js";

export const getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find(); 
    res.json(employees);
  } catch (err) {
    next(err);                               
      }
  };

export const getEmployeeById = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

export const getEmployeeByName = async (req, res, next) => {
    try {
        const { name } = req.params;   
        const employees = await Employee.find({ name: new RegExp(name, 'i') });
        res.json(employees);
    }
    catch (err) {
        next(err);
    }
};

export const createEmployee = async (req, res, next) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
    console.log("Employee created:", savedEmployee);
  } catch (err) {
    next(err);
  }
};
export const updateEmployee = async (req, res, next) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
        req.body,
        { new: true}
    );
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(updatedEmployee);
    console.log("Employee updated:", updatedEmployee);
    } catch (err) {
        next(err);
    }};

export const deleteEmployee = async (req, res, next) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.json({ message: "Employee deleted BC successfully" });
  } catch (err) {
    next(err);
  }
};

