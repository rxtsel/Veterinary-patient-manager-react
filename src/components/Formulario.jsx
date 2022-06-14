import { useState, useEffect } from 'react'
import Alerta from './Alerta'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // useState
  const [nombrePaciente, setNombrePaciente] = useState('')
  const [nombreAcudiente, setNombreAcudiente] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [observacion, setObservacion] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombrePaciente(paciente.nombrePaciente)
      setNombreAcudiente(paciente.nombreAcudiente)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setObservacion(paciente.observacion)
    }
  }, [paciente])

  const getId = () => {
    const ramdon = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return ramdon + fecha
  }

  // onSubmit (al dar click en button submit)
  const handleSubmit = (e) => {
    e.preventDefault()

    // validacion formulario
    if ([nombrePaciente, nombreAcudiente, email, fecha, observacion].includes('')) {
      setError(true)
      return
    }
    setError(false)

    // creamos un objeto para guardar los datos
    const objetoCliente = {
      nombrePaciente,
      nombreAcudiente,
      email,
      fecha,
      observacion
    }

    if (paciente.id) {
      // editando registro
      objetoCliente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoCliente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      // nuevo registro
      objetoCliente.id = getId()
      setPacientes([...pacientes, objetoCliente])
    }

    // reiniciar formulario
    setNombrePaciente('')
    setNombreAcudiente('')
    setEmail('')
    setFecha('')
    setObservacion('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h1 className='font-black text-center text-3xl text-black dark:text-sky-400'>Seguimiento pacientes</h1>
      <p className='text-lg mt-5 text-center mb-5 text-black dark:text-gray-200'>Añade pacientes y <span className='text-indigo-600 font-bold dark:text-gray-200'>adminístralos</span></p>

      <form
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-5 dark:bg-slate-800'
        onSubmit={handleSubmit}
      >
        {error && <Alerta> <p className='text-white uppercase'>Todos los campos son obligatorios.</p> </Alerta>}
        <div id='alerta' className='mb-5'>
          <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold dark:text-white'>
            Nombre mascota
          </label>
          <input
            id='nombre'
            type='text'
            placeholder='Nombre de la mascota'
            autoComplete='off'
            className='text-black border-2 w-full p-2 mt-2 rounded-lg outline-none focus:border-black dark:bg-slate-900 dark:text-gray-200 dark:border-slate-900 placeholder:text-slate-600 dark:focus:border-sky-400'
            value={nombrePaciente}
            onChange={(e) => setNombrePaciente(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='acudiente' className='block text-gray-700 uppercase font-bold dark:text-white'>
            Nombre propietario
          </label>
          <input
            id='acudiente'
            type='text'
            placeholder='Nombre del propietario'
            autoComplete='off'
            className='text-black border-2 w-full p-2 mt-2 rounded-lg outline-none focus:border-black dark:bg-slate-900 dark:text-gray-200 dark:border-slate-900 placeholder:text-slate-600 dark:focus:border-sky-400'
            value={nombreAcudiente}
            onChange={e => setNombreAcudiente(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold dark:text-white'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email del propietario'
            autoComplete='off'
            className='text-black border-2 w-full p-2 mt-2 rounded-lg outline-none focus:border-black dark:bg-slate-900 dark:text-gray-200 dark:border-slate-900 placeholder:text-slate-600 dark:focus:border-sky-400'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='fecha' className='block text-gray-700 uppercase font-bold dark:text-white'>
            Fecha de cita
          </label>
          <input
            id='fecha'
            type='date'
            autoComplete='off'
            className='text-black border-2 w-full p-2 mt-2 rounded-lg outline-none focus:border-black dark:bg-slate-900 dark:text-gray-200 dark:border-slate-900 placeholder:text-slate-600 dark:focus:border-sky-400'
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='mensaje' className='block text-gray-700 uppercase font-bold dark:text-white'>
            Síntomas
          </label>
          <textarea
            id='mensaje'
            className='text-black border-2 w-full p-2 mt-2 rounded-lg outline-none focus:border-black dark:bg-slate-900 dark:text-gray-200 dark:border-slate-900 placeholder:text-slate-600 dark:focus:border-sky-400'
            placeholder='Síntomas de la mascota'
            value={observacion}
            onChange={e => setObservacion(e.target.value)}
          />
        </div>

        <input
          type='submit'
          value={paciente.id ? 'Guardar cambios' : 'Agregar paciente'}
          className='bg-indigo-600 text-white font-normal uppercase rounded-lg w-full p-3 cursor-pointer hover:bg-indigo-700 transition-all outline-none dark:bg-sky-400 dark:hover:bg-sky-500'
        />
      </form>

    </div>
  )
}

export default Formulario
