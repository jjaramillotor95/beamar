import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ContratosModels = db.define('contratos', {
    idempleado: {type: DataTypes.INTEGER},
    contrato: {type: DataTypes.STRING},
    numeroContrato: {type: DataTypes.STRING},
    fechaInicio: {type: DataTypes.DATE},
    fechaFinal: {type: DataTypes.DATE},
	sueldo: {type: DataTypes.BIGINT},
    tipoSueldo: {type: DataTypes.TINYINT},
    reteFuente: {type: DataTypes.TINYINT},
    dirOfc : {type: DataTypes.TEXT},
    ciudadOfc : {type: DataTypes.TEXT},
    cargo : {type: DataTypes.TEXT},
    tipoCotizante: {type: DataTypes.STRING},
    grupoNomina: {type: DataTypes.TEXT},
    subtipoCotizante: {type: DataTypes.TEXT},
})

export default ContratosModels