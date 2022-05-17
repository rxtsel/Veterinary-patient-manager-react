import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import GithubCorner from 'react-github-corner';
import Footer from "./components/Footer";

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})
  
  // useEffect( () => {
  //   const getLocalStorage = () => {
  //     const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? []
  //     setPacientes(pacientesLocalStorage)
  //   }
  //   getLocalStorage()
  // }, [] )

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes] )
  
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <GithubCorner href="https://github.com/rxtsel/Veterinary-patient-manager-react" target="_blank" size={100}/>
      <div className='mt-12 mx-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default App
