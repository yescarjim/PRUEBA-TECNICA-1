//1. Importar dependencias
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Router } from "express";
import { conexionmongo } from "./src/config/db.js";
import departmentRouter from "./src/routes/departments.routes.js";
import employeeRouter from "./src/routes/employees.routes.js";



// Configuracion de dependencias
const app = express();
dotenv.config();
const port = process.env.PORT;
conexionmongo();


// Funcionalidades
app.get("/",(req,res)=>{
res.send("server works!")
});

app.use(cors());
app.use(express.json());
app.use("/departments", departmentRouter);
app.use("/employees", employeeRouter)


//levantamos el servidor
app.listen(port, ()=>{
console.log(`El servidor esta ejecutando en http://localhost:${port}`)
});