import './App.css'
import CompShowEmplados from './empleados/ShowEmplados'
import CompCreateEmpleado from './components/CreateEmpleado'
import {BrowserRouter, Routes,  Route} from 'react-router-dom'
import CompCreateContrato from './components/CreateContrato'
import CompUpdateEmpleado from './components/UpdatedEmpleado'
import CompShowContratos from './components/ShowContratos'
import CompUpdateContrato from './components/UpdatedContrato'
import CompCreateAmendarContrato from './components/CreateAmendar'



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <CompShowEmplados / >}></Route>
    <Route path='/crear-empleado' element={ <CompCreateEmpleado / >}></Route>
    <Route path='/crear-contrato/:id' element={ <CompCreateContrato / >}></Route>
    <Route path='/edit-empleado/:id' element={ <CompUpdateEmpleado / >}></Route>
    <Route path='/contratos-empleado/:id' element={ <CompShowContratos / >}></Route>
    <Route path='/editar-contratos-empleado/:id' element={ <CompUpdateContrato / >}></Route>
    <Route path='/amendar/contrato/:id/:contrato' element={ <CompCreateAmendarContrato / >}></Route>


    </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;
