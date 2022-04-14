import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'

const URI = 'http://localhost:8000/empleados/'


const CompShowEmplados = () =>{
    const [empleados, setEmpleado] = useState([])
    useEffect ( () => {
        getEmpleados()
    },[])

    const getEmpleados = async () => {
     const res = await axios.get(URI)
     setEmpleado(res.data)
 }

 const deletedEmplado = async (id) =>{
    await axios.delete(`${URI}${id}`)
    getEmpleados()
}



const columns = [
{
    name: 'COD',
    selector: row => row.numeroEmpleado,
},
{
    name: 'Nombres',
    selector: row => row.nombres+' '+row.apellidos,
},
{
    name: 'Documento',
    selector: row => row.documento,
},
{
    name: 'Actualizar',
    selector: row => <Link to={`edit-empleado/${row.id}`} className='btn btn-primary'><i className="fa-solid fa-pen"></i></Link> ,

},
{
    name: 'Contratos',
    selector: row => <Link to={`contratos-empleado/${row.id}`} className='btn btn-success'><i className="fa-solid fa-briefcase"></i></Link>,

},
{
    name: 'Eliminar',
    selector: row =>  <button onClick={()=>deletedEmplado(row.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>,
  

},
];



return(
    <div className='container'>
    <div className='row'>
    <div className='col'>
    <DataTable
    columns={columns}
    data={empleados}
    pagination
    />

   
    <div className='createEmpleado'> 
    <Link to={'/crear-empleado'} className='btn btn-primary'>Añadir Empleado</Link>
    </div>

    </div>

    </div>

    </div>

    )

}

export default CompShowEmplados