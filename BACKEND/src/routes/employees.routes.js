import express from "express";
import { Router } from "express";

import {
    postEmployee,
    getAllEmployees,
    getEmployeeByCode,
    putEmployee,
    deleteEmployeeByCode
} from "../controllers/employees.controller.js";

const employeeRouter = Router();


employeeRouter.post("/", postEmployee);


employeeRouter.get("/", getAllEmployees);


employeeRouter.get("/:code", getEmployeeByCode);

employeeRouter.put("/:code", putEmployee);

employeeRouter.delete("/:code", deleteEmployeeByCode);

export default employeeRouter;