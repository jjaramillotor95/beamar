import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { useParams } from 'react-router-dom'



const URIC = 'http://localhost:8000/empleados/contrato/'

const URIA = 'http://localhost:8000/empleados/contrato/amendar/'


const URIE = 'http://localhost:8000/empleados/'

const CompCreateAmendarContrato = () => {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	
	const idempleado = useParams()



	const [fechaFinal, setFechaFinal] = useState([])

	const [sueldo, setSueldo] = useState('')

	const [tipoSueldo, setTipoSueldo] = useState('')

	const [reteFuente, setReteFuente] = useState('')

	const [dirOfc, setDirofc] = useState('')
	const [ciudadOfc, setCiudadOfc] = useState('')


	const [grupoNomina, setGrupoNomina] = useState('')
	const [subtipoCotizante, setSubtipoCotizante] = useState('')
	const [tipoCotizante, setTipoCotizante] = useState('')

	const [nombres, setNombres] = useState([])
	const [apellidos, setApellidos] = useState([])
	const [documento, setDocumento] = useState([])

	const [numeroEmpleado, setNumeroEmpleado] = useState([])

	const [numeroContrato, setNumeroContrato] = useState([])
	const [titulo, setTitulo] = useState('')


	const storeContrato = async (e) =>{

		e.preventDefault()

		 await axios.post(URIA, {
			titulo:titulo,
			sueldo:sueldo,
			tipoSueldo:tipoSueldo,
			reteFuente:reteFuente,
			dirOfc:dirOfc,
			ciudadOfc:ciudadOfc,
			grupoNomina:grupoNomina,
			subtipoCotizante:subtipoCotizante,
			tipoCotizante:tipoCotizante,
			idcontrato:idempleado.contrato
		})

		handleShow()

	}

	useEffect ( () => {
		getEmpleadoById()
		getContratoById()
// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	const getEmpleadoById = async () =>{
		const res =  await axios.get(URIE+idempleado.id)
		setNombres(res.data.nombres)
		setNumeroEmpleado(res.data.numeroEmpleado)
		setApellidos(res.data.apellidos)
		setDocumento(res.data.documento)
	}

	const getContratoById = async () =>{
		const res =  await axios.get(URIC+idempleado.contrato)
		setFechaFinal(res.data.fechaFinal)
		setNumeroContrato(res.data.numeroContrato)

	}




	const año = new Date().getFullYear().toString().substr()
	const mes = new Date().getMonth() + 1
	const dia = new Date().getDate()

	const mesfinal = `${mes<10?`0${mes}`:`${mes}`}`

	const fecha = año+'-'+mesfinal+'-'+dia



	return(
		<div>

		<header className="App-header" >
		<Link to={'/'}><i className="fa-solid fa-arrow-left"></i> Amendar Contrato</Link>
		</header>

		<div className="container">

		<form onSubmit={storeContrato} id="create-form">
		<div className="row">

		<div className="col-md-12">
		<h3> {nombres}  {apellidos}	</h3>
		</div>
		<div className="col-md-12">
		<span>(Numero: {numeroEmpleado})</span>
		</div>
		<div className="col-md-12">
		<span>CC: {documento}</span>
		</div>

		<div className="col-md-12">
		<span>Estado del Contrato</span>

		{fechaFinal>fecha ? <span className="text-success" ><strong> Activo </strong></span> :  <span className="text-danger"  >Inactivo</span>}

		</div>


		<div className="col-md-6 ">
		<input 
		type="text"
		className="form-control m-1"
		placeholder="Titulo del amendamiento" 
		value={titulo}
		onChange={(e)=> setTitulo(e.target.value)}
		/>
		</div>


		<div className="col-md-6 ">
		<input 
		type="text"
		className="form-control m-1"
		placeholder="Sueldo" 
		value={sueldo}
		onChange={(e)=> setSueldo(e.target.value)}
		/>
		</div>



		<div className="col-md-6 ">
		<input type="text" 
		className="form-control m-1" 
		placeholder="Ciudad Oficina" 
		value={ciudadOfc}
		onChange={(e)=> setCiudadOfc(e.target.value)}
		/>
		</div>

		<div className="col-md-6 ">
		<input type="text"
		className="form-control m-1"
		placeholder="Oficina direccion" 
		value={dirOfc}
		onChange={(e)=> setDirofc(e.target.value)}
		/>
		</div>


		<div className="col-md-6  "  onChange={(e)=> setTipoSueldo(e.target.value)}>
		<p>¿ Sueldo del empleado es integral ?</p>
		<div className="form-check form-check-inline">
		<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
		<label className="form-check-label" htmlFor="inlineRadio1">Si</label>
		</div>
		<div className="form-check form-check-inline">
		<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0" />
		<label className="form-check-label" htmlFor="inlineRadio2">No</label>
		</div>
		</div>




		<div className="col-md-6  ">

		<select className='form-control m-1' value={grupoNomina} onChange={(e)=> setGrupoNomina(e.target.value)} >
		<option>Grupo Nomina</option>
		<option value='Grupo 1'>Grupo 1</option>
		<option value='Grupo 2'>Grupo 2</option>
		<option value='Grupo 3'>Grupo 3</option>
		</select>

		</div>

		<div className="col-md-6  ">
		<select className='form-control m-1' value={tipoCotizante} onChange={(e)=> setTipoCotizante(e.target.value)} >
		<option>Tipo de Cotizante</option>
		<option value='Tipo 1'>Tipo 1</option>
		<option value='Tipo 2'>Tipo 2</option>
		<option value='Tipo 3'>Tipo 3</option>
		</select>
		</div>

		<div className="col-md-6  ">
		<select className='form-control m-1' value={subtipoCotizante} onChange={(e)=> setSubtipoCotizante(e.target.value)} >
		<option>Subtipo de cotizante</option>
		<option value='Tipo 1'>Tipo 1</option>
		<option value='Tipo 2'>Tipo 2</option>
		<option value='Tipo 3'>Tipo 3</option>
		</select>
		</div>

		<div className="col-md-6 " onChange={(e)=> setReteFuente(e.target.value)}>
		<p>¿Deseas activar deducciones de terencion de la fuente (Valores mensuales)?</p>
		<div className="form-check form-check-inline">
		<input className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="1" />
		<label className="form-check-label" htmlFor="inlineRadio4">Si</label>
		</div>
		<div className="form-check form-check-inline">
		<input className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio3" value="0" />
		<label className="form-check-label" htmlFor="inlineRadio3">No</label>
		</div>
		</div>



		</div>
		<div className='infoEmpleado m-4'>
		<button type="submit" className='btn btn-primary'>Aceptar</button>
		</div>
		<div className='infoEmpleado m-4'>
		<Link to={'/'} className='btn btn-light'>Cancelar</Link>
		</div>
		</form>





		</div>


		<Modal
		show={show}
		onHide={handleClose}
		backdrop="static"
		keyboard={false}
		>
		<Modal.Body className="empleado">
		<br/>

		<div >
		<span>Contrato agregado satisfactoriamente</span>
		</div >
		<div >
		<span><i className="fa-solid fa-circle-check"></i></span>
		</div >
		<h3>{}</h3>

		<p>Numero: {numeroContrato}</p>

		<div className="cancelar">

		<Link to={'/'} className='btn btn-primary'>Aceptar</Link>

		</div>



		</Modal.Body>
		</Modal>


		</div>

		)


}

export default CompCreateAmendarContrato