import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { useParams } from 'react-router-dom'
import DataTable from 'react-data-table-component'

const URI = 'http://localhost:8000/empleados/contratos/'
const URIE = 'http://localhost:8000/empleados/'


const cancelCourse = () => { 
	document.getElementById("create-form").reset();
}

const CompShowContratos = () => {

	const idempleado = useParams()

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	const [nombres, setNombres] = useState('')
	const [apellidos, setApellidos] = useState('')
	const [tipoDoc, setTipoDoc] = useState('')
	const [documento, setDocumento] = useState('')
	const [direccion, setDireccion] = useState('')
	const [numeroEmpleado, setNumeroEmpleado] = useState('')

	const [contratos,setContratos]= useState('')

	

	useEffect ( () => {
		getEmpleadoById()
		getContratoById()
	},[])

	const getEmpleadoById = async () =>{
		const res =  await axios.get(URIE+idempleado.id)
		setNombres(res.data.nombres)
		setNumeroEmpleado(res.data.numeroEmpleado)
		setApellidos(res.data.apellidos)
		setTipoDoc(res.data.tipoDoc)
		setDocumento(res.data.documento)
	}

	const getContratoById = async () =>{
		const res =  await axios.get(URI+idempleado.id)
		setContratos(res.data)
	}

	const año = new Date().getFullYear().toString().substr()
	const mes = new Date().getMonth() + 1
	const dia = new Date().getDate()

	const mesfinal = `${mes<10?`0${mes}`:`${mes}`}`

	const fecha = año+'-'+mesfinal+'-'+dia

	const columns = [
	{
		name: 'COD',
		selector: row => row.numeroContrato,
	},
	{
		name: 'Tipo Contrato',
		selector: row => row.contrato,

	},
	{
		name: 'Estado',
		selector: (row) => (row.fechaFinal>fecha ? <span className="text-success" ><strong> Activo </strong></span> :  <span className="text-danger"  >Inactivo</span>)

	},
	{
		name: 'Accion',
		selector: (row) => <Link to={`/editar-contratos-empleado/${row.id}`} ><i className="fa-solid fa-arrows-rotate"></i><p>Renovar</p></Link>,
	},
	];

	return(
		<div>
		<header className="App-header" >
		<Link to={'/'}><i className="fa-solid fa-arrow-left"></i> Contratos empleado</Link>
		</header>
		<div className="container">
		<div className="row">
		<div className="col-md-12">
		<h3> {nombres}  {apellidos}	</h3>
		</div>
		<div className="col-md-12">
		<span>(Numero: {numeroEmpleado})</span>
		</div>
		<br/>

{/*		<div className="col-md-4 cantratoacciones">
		<i className="fa-solid fa-arrows-rotate"></i><p>Renovar</p>
		</div>*/}

		<div className="col-md-6 cantratoacciones">
		<Link to={`/crear-contrato/${idempleado.id}/`}>
		<i className="fa-solid fa-pen-to-square"></i><p>Crear contrato</p>
		</Link>
		</div>

		<div className="col-md-6 cantratoacciones">
		<Link to={'/'}>	<i className="fa-solid fa-xmark"></i><p>Finalizar</p></Link>
		</div>


		<div className="col-md-12">
		<DataTable
		columns={columns}
		data={contratos}
		pagination
		/>
		</div>

		</div>
		</div>
		</div>
		)
}

export default CompShowContratos