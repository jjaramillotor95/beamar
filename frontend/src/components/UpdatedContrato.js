import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { useParams } from 'react-router-dom'
import DataTable from 'react-data-table-component'


const URI = 'http://localhost:8000/empleados/contrato/'


const URIA = 'http://localhost:8000/empleados/contrato/amendar/'

const CompUpdateContrato = () => {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	
	const idempleado = useParams()

	const [amendar, setAmendar] = useState('')

	const [contrato, setContrato] = useState('')

	const [fechaInicio, setFechaInicio] = useState('')
	const [fechaFinal, setFechaFinal] = useState('')

	const [numeroContrato, setNumeroContrato] = useState('')


	const [sueldo, setSueldo] = useState('')

	const [tipoSueldo, setTipoSueldo] = useState('')

	const [reteFuente, setReteFuente] = useState('')

	const [dirOfc, setDirofc] = useState('')
	const [ciudadOfc, setCiudadOfc] = useState('')

	const [cargo, setCargo] = useState('')


	const [grupoNomina, setGrupoNomina] = useState('')
	const [subtipoCotizante, setSubtipoCotizante] = useState('')
	const [tipoCotizante, setTipoCotizante] = useState('')

	const [id, setId] = useState('')



	const UpdateContrato = async (e) =>{

		e.preventDefault()

	     axios.put(URI+idempleado.id, {

			fechaInicio:fechaInicio,
			fechaFinal:fechaFinal,
			sueldo:sueldo,
			tipoSueldo:tipoSueldo,
			reteFuente:reteFuente,
			dirOfc:dirOfc,
			ciudadOfc:ciudadOfc,
			cargo:cargo,
			grupoNomina:grupoNomina,
			subtipoCotizante:subtipoCotizante,
			contrato:contrato,
			tipoCotizante:tipoCotizante,
		})

		handleShow()

	}

	useEffect ( () => {
		getContratoById()
		getAmandarById()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	const getContratoById = async () =>{
		const res =  await axios.get(URI+idempleado.id)

		setContrato(res.data.contrato)
		setFechaInicio(res.data.fechaInicio)
		setFechaFinal(res.data.fechaFinal)
		setNumeroContrato(res.data.numeroContrato)
		setSueldo(res.data.sueldo)
		setTipoSueldo(res.data.sueldo)
		setReteFuente(res.data.reteFuente)
		setDirofc(res.data.dirOfc)
		setCiudadOfc(res.data.ciudadOfc)
		setCargo(res.data.cargo)
		setGrupoNomina(res.data.grupoNomina)
		setTipoSueldo(res.data.tipoSueldo)


		setSubtipoCotizante(res.data.subtipoCotizante)
		setTipoCotizante(res.data.tipoCotizante)

		setId(res.data.idempleado)
	}


	const getAmandarById = async () =>{
		const res =  await axios.get(URIA+idempleado.id)
		setAmendar(res.data)

	}

	const columns = [
	{
		name: 'Titulo',
		selector: row => row.titulo,

	},
	{
		name: 'Modificado el',
		selector: row => 	row.updatedAt,
	},

	];




	return(
		<div>

		<header className="App-header" >
		<Link to={'/'}><i className="fa-solid fa-arrow-left"></i> Renovar Contrato</Link>

		<div className="col-md-12 cantratoacciones text-center">

		<Link to={`/amendar/contrato/${id}/${idempleado.id}`}>

		<i className="fa-solid fa-pen-to-square"></i><p>AMENDAR</p>
		</Link>
		</div>
		</header>

		<div className="container">

		<form onSubmit={UpdateContrato} id="create-form">
		<div className="row">

		<div className="col-md-12 ">
		<select className='form-control m-1'
		value={contrato} 
		onChange={(e)=> setContrato(e.target.value)}>
		<option>Tipo de Contrato</option>
		<option value='Indefinido'>Indefinido</option>
		<option value='Prestacion de servicio'>Prestacion de servicio</option>
		<option value='Pasantia'>Pasantia</option>
		<option value='Practicas'>Practicas</option>
		</select>
		</div>


		<div className="col-md-6  ">
		<label>Fecha de inicio</label>
		<input 
		type="Date" 
		className="form-control m-1" 
		value={fechaInicio}
		onChange={(e)=> setFechaInicio(e.target.value)}
		/>
		</div>

		<div className="col-md-6 ">
		<label>Fecha de fin</label>
		<input 
		type="Date" 
		className="form-control m-1" 
		value={fechaFinal}
		onChange={(e)=> setFechaFinal(e.target.value)}
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


		<div className="col-md-6  "  onChange={(e)=> setTipoSueldo(e.target.value)}>
		<p>¿ Sueldo del empleado es integral ? {tipoSueldo} </p>
		<div className="form-check form-check-inline">
		<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"  checked={tipoSueldo === 1}/>
		<label className="form-check-label" htmlFor="inlineRadio1">Si</label>
		</div>
		<div className="form-check form-check-inline">
		<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0" checked={tipoSueldo === 0}/>
		<label className="form-check-label" htmlFor="inlineRadio2">No</label>
		</div>
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


		<div className="col-md-6 ">
		<select className='form-control m-1' value={cargo} onChange={(e)=> setCargo(e.target.value)} >
		<option>Cargo</option>
		<option value='Admin'>Admin</option>
		<option value='Desarrollo WEB'>Desarrollo WEB</option>
		<option value='Desarrollo Software'>Desarrollo Software</option>
		<option value='CM'>CM</option>
		</select>

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
		<input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3" value="1" checked={reteFuente === 1}/>
		<label className="form-check-label" htmlFor="inlineRadio3">Si</label>
		</div>
		<div className="form-check form-check-inline">
		<input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio4" value="0" checked={reteFuente === 0}/>
		<label className="form-check-label" htmlFor="inlineRadio4">No</label>
		</div>
		</div>


		<div className="col-md-12">

		<span><h4> Historia de Cambios </h4></span>
		<DataTable
		columns={columns}
		data={amendar}
		pagination
		/>
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
		<span>Contrato renovado satisfactoriamente</span>
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

export default CompUpdateContrato