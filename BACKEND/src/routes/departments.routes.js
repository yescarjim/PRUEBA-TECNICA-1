import express from "express";
import { Router } from "express";

import {
    postDepartment,
    getAllDepartments,
    getDepartmentByCode,
    putDepartment,
    deleteDepartmentByCode
} from "../controllers/departments.controller.js"

const departmentRouter = Router();

departmentRouter.post("/", postDepartment);
departmentRouter.get("/", getAllDepartments);
departmentRouter.get("/:code", getDepartmentByCode);
departmentRouter.put("/:code", putDepartment);
departmentRouter.delete("/:code", deleteDepartmentByCode);


export default departmentRouter;