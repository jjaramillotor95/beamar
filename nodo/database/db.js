import { Sequelize } from "sequelize"

const db = new Sequelize('crm_app', 'root', '',  {
    host: 'localhost',    // Dirección de la base de datos, por defecto esta máquina
    dialect: 'mysql'
})
export default db