import { departmentModel } from "../models/departments.model.js";

export const postDepartment = async (request, response) => {
    try {
        const { code, name } = request.body;

        // Validar si el código ya existe
        const exists = await departmentModel.findOne({ code });
        if (exists) {
            return response.status(400).json({
                mensaje: "Ya existe un departamento con este código"
            });
        }

        const newDepartment = await departmentModel.create({ code, name });

        return response.status(201).json({
            mensaje: "Departamento creado correctamente",
            data: newDepartment
        });

    } catch (error) {
        return response.status(400).json({
            mensaje: "Ocurrió un error al crear el departamento",
            error: error.message || error
        });
    }
};

//pMostrar Departamentos

export const getAllDepartments = async (request, response) => {
    try {
        const allDepartments = await departmentModel.find();

        return response.status(200).json({
            mensaje: "Departamentos Mostrados exitosamente",
            data: allDepartments
        });

    } catch (error) {
        return response.status(500).json({
            mensaje: "Ocurrió un error al MOSTRAR los departamentos",
            error: error.message || error
        });
    }
};

// Mostrar Departamentospor codigo
export const getDepartmentByCode = async (request, response) => {
    try {
        const code = request.params.code;

        const department = await departmentModel.findOne({ code });

        if (!department) {
            return response.status(404).json({
                mensaje: "No existe un departamento con ese código"
            });
        }

        return response.status(200).json({
            mensaje: "Departamento mostrado exitosamente por codigo",
            data: department
        });

    } catch (error) {
        return response.status(500).json({
            mensaje: "Ocurrió un error al mostrar el departamento",
            error: error.message || error
        });
    }
};

//Actualizar Departamento

export const putDepartment = async (request, response) => {
    try {
        const codeForUpdate = request.params.code;
        const dataForUpdate = request.body;

        const updatedDepartment = await departmentModel.findOneAndUpdate(
            { code: codeForUpdate },
            dataForUpdate,
            { new: true }
        );

        if (!updatedDepartment) {
            return response.status(404).json({
                mensaje: "No existe un departamento con ese código"
            });
        }

        return response.status(200).json({
            mensaje: "Departamento actualizado correctamente",
            data: updatedDepartment
        });

    } catch (error) {
        return response.status(500).json({
            mensaje: "Ocurrió un error al actualizar el departamento",
            error: error.message || error
        });
    }
};


//Eliminar Departamento

export const deleteDepartmentByCode = async (request, response) => {
    try {
        const codeForDelete = request.params.code;

        const deletedDepartment = await departmentModel.findOneAndDelete({ code: codeForDelete });

        if (!deletedDepartment) {
            return response.status(404).json({
                mensaje: "No existe un departamento con ese código"
            });
        }

        return response.status(200).json({
            mensaje: "Departamento eliminado correctamente"
        });

    } catch (error) {
        return response.status(500).json({
            mensaje: "Ocurrió un error al eliminar el departamento",
            error: error.message || error
        });
    }
};