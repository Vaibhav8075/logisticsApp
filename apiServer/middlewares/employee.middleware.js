import Employee from "../models/employee.model.js";

export const validateEmployee = async (req, res, next) => {
  const { name, role, wage, contact, joiningDate } = req.body;
  const errors = [];

  // Basic validations
  if (!name || name.trim().length < 3) {
    errors.push("Name must be a valid string with at least 2 characters");
  }

  const validRoles = ["worker", "manager", "driver", "admin"];
  if (!role || !validRoles.includes(role)) {
    errors.push(`Role must be one of: ${validRoles.join(", ")}`);
  }

  if (!wage?.amount || typeof wage.amount !== "number" || wage.amount < 0) {
    errors.push("Wage amount must be a positive number");
  }

  const validWageTypes = ["hourly", "daily", "weekly", "monthly"];
  if (!wage?.type || !validWageTypes.includes(wage.type)) {
    errors.push(`Wage type must be one of: ${validWageTypes.join(", ")}`);
  }

  const phoneRegex = /^[0-9]{10}$/; // simple 10-digit check (India style)
  if (!contact?.phone || !phoneRegex.test(contact.phone)) {
    errors.push("Phone number must be a valid 10-digit number");
  }

  if (!joiningDate || isNaN(Date.parse(joiningDate))) {
    errors.push("Joining date must be a valid date (YYYY-MM-DD)");
  }

  // --- New uniqueness validation ---
  if (name && contact?.phone) {
    const existingEmployee = await Employee.findOne({
      name: name.trim(),
      "contact.phone": contact.phone,
    });

    if (existingEmployee) {
      errors.push("Employee with the same name and phone already exists. Either name or phone must be unique.");
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  next();
};


export const validateEmployeeUpdate = (req, res, next) => {
  const { name, role, wage, contact } = req.body;
  const errors = [];

  if (name && name.length < 3) {
    errors.push("Name must be at least 3 characters");
  }

  if (role && !["worker", "manager", "driver", "admin"].includes(role)) {
    errors.push("Invalid role");
  }

  if (wage) {
    if (wage.amount !== undefined && wage.amount < 0) {
      errors.push("Wage amount must be positive");
    }
    if (wage.type && !["hourly", "daily", "weekly", "monthly"].includes(wage.type)) {
      errors.push("Invalid wage type");
    }
  }

  if (contact?.phone && !/^[0-9]{10}$/.test(contact.phone)) {
    errors.push("Phone number must be 10 digits");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }
  console.log("Validation passed");
  next();
};
