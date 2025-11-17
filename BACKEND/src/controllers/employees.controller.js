import { employeeModel } from "../models/employees.model.js";

//1.metodo para CREAR un Empleado -> POST
export const postEmployee = async (request, response) => {
    try {
        const { code, name, lastName1, lastName2, departmentCode } = request.body;

        const exists = await employeeModel.findOne({ code });
        if (exists) {
            return response.status(400).json({
                mensaje: "Ya existe un empleado con este código"
            });
        }


       const newEmployee = await employeeModel.create({
            code,
            name,
            lastName1,
            lastName2,
            departmentCode

        });

        return response.status(201).json({
            "mensaje": "Empleado creado correctamente",
            data: newEmployee
        });


    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error al crear un empleado",
            "error": error.message || error
        });
    }
}



//2. Metodo para MOSTRAR todos los empleados -> GET
export const getAllEmployees = async (request, response) => {

    try {
        const allEmployees = await employeeModel.find();
        return response.status(200).json({
            "mensaje": "Empleados mostrados exitosamente",
            "data": allEmployees
        })

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al mostrar los empleados",
            "error": error.message || error
        });
    }

}


//Mostrar empleado por código 
export const getEmployeeByCode = async (request, response) => {

    try {
        const code = request.params.code;
        const employee = await employeeModel.findOne({ code });
        if (!employee) {
            return response.status(400).json({
                "mensaje": "No existe un empleado con ese código",
            });
        }

        return response.status(200).json({
            "mensaje": " Empleado encontrado y mostrado exitosamente",
            data: employee
        })

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al mostrar este empleado por codigo",
            "error": error.message || error
        });
    }

}


//3. Metodo para ACTUALIZAR un empleado -> PUT
export const putEmployee = async (request, response) => {
    try {
        const codeForUpdate = request.params.code;
        const dataForUpdate = request.body;

        const updatedEmployee = await employeeModel.findOneAndUpdate(
            { code: codeForUpdate },
            dataForUpdate,
            { new: true }
        );

        if (!updatedEmployee) {
            return response.status(404).json({
                "mensaje": "No existe un empleado con ese código"
            });
        }

        return response.status(200).json({
            "mensaje": "Empleado actualizado correctamente"
        });

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al actualizar este empleado",
            "error": error.message || error
        });

    }
};

//4. Metodo para ELIMINAR un empleado -> DELETE
export const deleteEmployeeByCode = async (request, response) => {
    try {
        const codeForDelete = request.params.code;
        const deletedEmployee = await employeeModel.findOneAndDelete({ code: codeForDelete });

        if (!deletedEmployee) {
            return response.status(404).json({
                mensaje: "No existe un empleado con ese código"
            });
        }


        return response.status(200).json({
            "mensaje": "Empleado eliminado exitosamente"
        });

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al eliminar este empleado",
            "error": error.message || error
        })

    }

}