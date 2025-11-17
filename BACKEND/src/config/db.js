import mongoose from "mongoose";

export const conexionmongo = async () => {
    try {
        await mongoose.connect(process.env.BD_URL, { dbName: "e-commerce" });
console.log("conexion con la base de datos");
    } catch (error) {
console.error("Error de conexion:", error);
    }
}