import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/empleados/'

const CompUpdateEmpleado = () => {

	const idempleado = useParams()


	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [nombres, setNombres] = useState('')
	const [apellidos, setApellidos] = useState('')
	const [tipoDoc, setTipoDoc] = useState('')
	const [documento, setDocumento] = useState('')

	const [celular, setCelular] = useState('')

	const [direccion, setDireccion] = useState('')

	const [ciudad, setCiudad] = useState('')

	const [idmetodoPago, setIdmetodoPago] = useState('')
	const [datosPago, setDatosPago] = useState('')

	const [idsalud, setIdsalud] = useState('')

	const [idpension, setIdpension] = useState('')
	const [idarl, setIdarl] = useState('')

	const [idcajaCompensacion, setIdcajaCompensacion] = useState('')
	const [idcensantias, setIdcensantias] = useState('')


	const  [numeroEmpleado, setNumeroEmpleado] = useState('')


	const updateEmpleado = async (e) =>{

		e.preventDefault()

		const res =  await axios.put(URI+idempleado.id, {
			nombres:nombres,
			apellidos:apellidos,
			tipoDoc:tipoDoc,
			documento:documento,
			celular:celular,
			direccion:direccion,
			ciudad:ciudad,
			idmetodoPago:idmetodoPago,
			idsalud:idsalud,
			idpension:idpension,
			idarl:idarl,
			idcajaCompensacion:idcajaCompensacion,
			idcensantias:idcensantias,
			datosPago: datosPago,
		})

		if(res.data.type === 200){
			handleShow()
			getEmpleadoById()
		}
	}

	useEffect ( () => {
		getEmpleadoById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	const getEmpleadoById = async () =>{
		const res =  await axios.get(URI+idempleado.id)
		setNombres(res.data.nombres)
		setNumeroEmpleado(res.data.numeroEmpleado)

		setApellidos(res.data.apellidos)
		setTipoDoc(res.data.tipoDoc)
		setDocumento(res.data.documento)
		setCelular(res.data.celular)
		setDireccion(res.data.direccion)
		setCiudad(res.data.ciudad)
		setIdmetodoPago(res.data.idmetodoPago)
		setDatosPago(res.data.datosPago)
		setIdsalud(res.data.idsalud)
		setIdpension(res.data.idpension)
		setIdarl(res.data.idarl)
		setIdcajaCompensacion(res.data.idcajaCompensacion)
		setIdcensantias(res.data.idcensantias)
	}

	return(
		<div>
		<header className="App-header" >
		<Link to={'/'}><i className="fa-solid fa-arrow-left"></i> Añadir nuevo empleado</Link>
		</header>
		<div className="container">

		<form onSubmit={updateEmpleado} id="create-form">
		<div className="row">
		
		<div className="col-md-6">
		<input 
		type="text" 
		className="form-control m-1" 
		placeholder="Nombres" 
		value={nombres}
		onChange={(e)=> setNombres(e.target.value)}
		/>
		</div>

		<div className="col-md-6">
		<input 
		type="text"
		className="form-control m-1"
		placeholder="Apellidos" 
		value={apellidos}
		onChange={(e)=> setApellidos(e.target.value)}
		/>
		</div>


		<div className="col-md-6">
		<select className='form-control m-1'
		value={tipoDoc} onChange={(e)=> 
			setTipoDoc(e.target.value)}>
			<option>Tipo de documento</option>
			<option value='CC'>CC</option>
			<option value='Pasaporte'>Pasaporte</option>
			</select>
			</div>

			<div className="col-md-6">
			<input type="number" 
			className="form-control m-1" 
			placeholder="Numero de documento" 
			value={documento}
			onChange={(e)=> setDocumento(e.target.value)}
			/>
			</div>

			<div className="col-md-6">
			<input type="number"
			className="form-control m-1"
			placeholder="Cel/Tel" 
			value={celular}
			onChange={(e)=> setCelular(e.target.value)}
			/>
			</div>

			<div className="col-md-6">
			<input
			type="text"
			className="form-control m-1"
			placeholder="Direccòn"
			value={direccion}
			onChange={(e)=> setDireccion(e.target.value)}
			/>
			</div>

			<div className="col-md-6">
			<select className='form-control m-1' value={ciudad} onChange={(e)=> setCiudad(e.target.value)} >
			<option>Ciudad</option>
			<option value='Cartagena'>Cartagena</option>
			<option value='Bogota'>Bogota</option>
			</select>
			</div>


			<div className="col-md-6">
			<select className='form-control m-1' value={idmetodoPago} onChange={(e)=> setIdmetodoPago(e.target.value)} >
			<option>Metodo de pago</option>
			<option value='Efectivo'>Efectivo</option>
			<option value='Cuenta de ahorro'>Cuenta de ahorro</option>
			</select>
			</div>

			<div className="col-md-6">
			<input
			type="text"
			className="form-control m-1"
			placeholder="Datos de metodo de pagos"
			value={datosPago}
			onChange={(e)=> setDatosPago(e.target.value)} 
			/>
			</div>

			<div className="col-md-6">
			<select className='form-control m-1' value={idsalud} onChange={(e)=> setIdsalud(e.target.value)}>
			<option>Fondo de salud</option>
			<option value='saludcol'>saludcol</option>
			<option value='sanitas'>sanitas</option>
			</select>
			</div>

			<div className="col-md-6">
			<select className='form-control m-1' value={idpension} onChange={(e)=> setIdpension(e.target.value)} >
			<option>Fondo de pesion</option>
			<option value='Porvenir'>Porvenir</option>
			<option value='Seguro'>Seguro</option>
			</select>
			</div>

			<div className="col-md-6">
			<select className='form-control m-1' value={idarl} onChange={(e)=> setIdarl(e.target.value)}>
			<option>ARL</option>
			<option value='sura'>sura</option>
			<option value='arl2'>arl2</option>
			</select>
			</div>

			<div className="col-md-6">
			<select className='form-control m-1' value={idcajaCompensacion} onChange={(e)=> setIdcajaCompensacion(e.target.value)} >
			<option>Caja de Compensacion</option>
			<option value='Caja 1'>Caja 1</option>
			<option value='Caja 2'>Caja 2</option>
			</select>
			</div>

			<div className="col-md-6">
			<select  className='form-control m-1 ' value={idcensantias}  onChange={(e)=> setIdcensantias(e.target.value)} >
			<option>Fondo de cesantias  </option> 
			<option value='FNH'>FNH </option>
			<option value='Colpensiones'>Colpensiones</option>
			</select>
			</div>



			</div>
			<div className='infoEmpleado m-4'>
			<button type="submit" className='btn btn-primary'>Actualizar</button>
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
			<span>Empleado actualizado satisfactoriamente</span>
			</div >
			<div >
			<span><i className="fa-solid fa-circle-check"></i></span>
			</div >
			<h3>{nombres} {apellidos}</h3>

			<p>Numero: {numeroEmpleado}</p>

			<div className="cancelar">

			<Link to={'/'} className='btn btn-primary'>Aceptar</Link>

			</div>

			</Modal.Body>
			</Modal>

			</div>
			)
}

export default CompUpdateEmpleado