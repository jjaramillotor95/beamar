import ContratosModels from "../models/ContratosModels.js";
import AmandarModels from "../models/AmandarModels.js";


//** Metodos CRUD **/

export const getContratos = async (req, res) => {
    try {
        const contratos = await ContratosModels.findAll(
        {
            where: {idempleado: req.params.id}
        }
        )
        res.json(contratos)

    } catch (error) {
        res.json({message:error.message})

    }
    
}


export const getContrato = async (req, res) => {
    try {
        const contratos = await ContratosModels.findAll(
        {
            where: {id: req.params.id}
        }
        )
        res.json(contratos[0])

    } catch (error) {
        res.json({message:error.message})

    }
    
}


export const createdContratos = async (req, res) => {
    try {
        await ContratosModels.create(req.body)
        res.json({
            "message":"!Contrato Registrado con Exito!"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

export const updateContratos = async (req, res) => {
    try {
        await ContratosModels.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"!Registro actualizado con Exito!"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}



export const deleteContrato = async (req, res) => {
    try {
        await ContratosModels.destroy({
            where:{id: req.params.id}
        })
        res.json({
            "message":"!Eliminado con Exito!"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

export const createAmendarContratos = async (req, res) => {
    try {
        await AmandarModels.create(req.body)
        res.json({
            "message":"!Contrato Registrado con Exito!"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

export const getAmendarContratos = async (req, res) => {
    try {
        const amendar = await AmandarModels.findAll(
        {
          where: {idcontrato: req.params.id}

      }
      )
        res.json(amendar)

    } catch (error) {
        res.json({message:error.message})

    }
    
}




