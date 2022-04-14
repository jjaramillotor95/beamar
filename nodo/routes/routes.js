import  express from "express"
import { getAllEmpelados, getEmpleado, createdEmpleado, updateEmplado, deleteEmplado} from "../controllers/EmpleadosController.js";
import { getContratos, getContrato, createdContratos, updateContratos , deleteContrato, createAmendarContratos, getAmendarContratos} from "../controllers/ContratosController.js";

const router = express.Router()

router.get('/', getAllEmpelados)
router.get('/:id', getEmpleado)
router.post('/', createdEmpleado)
router.put('/:id', updateEmplado)
router.delete('/:id', deleteEmplado)

router.get('/contratos/:id', getContratos)
router.get('/contrato/:id', getContrato)

router.post('/contrato', createdContratos)
router.put('/contrato/:id', updateContratos)

// router.post('/amendar/contrato/:id/:contrato', createAmendarContratos)

router.post('/contrato/amendar', createAmendarContratos)
router.get('/contrato/amendar/:id', getAmendarContratos)



router.delete('/contrato/:id', deleteContrato)


export default router