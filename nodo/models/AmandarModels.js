import db from "../database/db.js";

import { DataTypes } from "sequelize";

const AmandarModels = db.define('amandar', {
  
    sueldo: {type: DataTypes.BIGINT},
    reteFuente: {type: DataTypes.TINYINT},
    dirOfc : {type: DataTypes.TEXT},
    ciudadOfc : {type: DataTypes.TEXT},
    tipoCotizante: {type: DataTypes.STRING},
    titulo: {type: DataTypes.STRING},
    grupoNomina: {type: DataTypes.TEXT},
    subtipoCotizante: {type: DataTypes.TEXT},
    idcontrato: {type: DataTypes.INTEGER},

})

export default AmandarModels