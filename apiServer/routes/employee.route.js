import { Router } from "express";
import { getAllEmployees, getEmployeeById, createEmployee, getEmployeeByName, updateEmployee, deleteEmployee } from "../controllers/employee.controller.js";
import { validateEmployee, validateEmployeeUpdate } from "../middlewares/employee.middleware.js";

const router = Router();

router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.get("/name/:name", getEmployeeByName);
router.post("/", validateEmployee, createEmployee);
router.put("/:id", validateEmployeeUpdate, updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;