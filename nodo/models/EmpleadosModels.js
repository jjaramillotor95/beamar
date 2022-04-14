import db from "../database/db.js";

import { DataTypes } from "sequelize";

const EmpleadosModels = db.define('empleados', {
    numeroEmpleado: {type: DataTypes.STRING},
    nombres: {type: DataTypes.STRING},
    apellidos: {type: DataTypes.STRING},
	tipoDoc: {type: DataTypes.STRING},
    documento : {type: DataTypes.BIGINT},
    celular : {type: DataTypes.STRING},
    direccion : {type: DataTypes.TEXT},
    ciudad : {type: DataTypes.STRING},
    idmetodoPago : {type: DataTypes.STRING},
    idsalud : {type: DataTypes.STRING},
    idpension : {type: DataTypes.STRING},
    idarl : {type: DataTypes.STRING},
    idcajaCompensacion : {type: DataTypes.STRING},
    idcensantias : {type: DataTypes.STRING},
    datosPago: {type: DataTypes.STRING},
})

export default EmpleadosModels