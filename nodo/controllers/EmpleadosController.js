import EmpleadosModels from "../models/EmpleadosModels.js"

//** Metodos CRUD **/

export const getAllEmpelados = async (req, res) => {
try {
    const empleados = await EmpleadosModels.findAll()
    res.json(empleados)

} catch (error) {
    res.json({message:error.message})

}

}


export const getEmpleado = async (req, res) =>{
try {

    const empleados = await EmpleadosModels.findAll({
        where:{id:req.params.id}
    })
    res.json(empleados[0])
} catch (error) {
    res.json({message:error.message})
}

}

export const createdEmpleado = async (req, res) => {
    try {
      const empleado =  await EmpleadosModels.create(req.body)
        res.json({
            "message":"!Registro creado con Exito!",
            "id": empleado.id,
            "type": 200
        })
    } catch (error) {
        res.json({
            message:error.message

        })
    }
}

export const updateEmplado = async (req, res) => {
    try {
        await EmpleadosModels.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"!Registro actualizado con Exito!",
            "type": 200
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

export const deleteEmplado = async (req, res) => {
    try {
        await EmpleadosModels.destroy({
            where:{id: req.params.id}
        })
        res.json({
            "message":"!Eliminado con Exito!"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}