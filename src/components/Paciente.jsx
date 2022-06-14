const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  // destructuring para llamar con variable en la lista:
  const { nombrePaciente, nombreAcudiente, email, fecha, observacion, id } = paciente
  const handlerEliminar = () => {
    const respuesta = window.confirm('¿Estás seguro que deseas eliminar de la lista?')
    if (respuesta) {
      eliminarPaciente(id)
    }
  }
  return (
    <div className='bg-white shadow-md md:ml-5 mb-5 px-5 py-10 rounded-lg dark:bg-slate-800'>
      <p className='font-bold uppercase text-gray-700 mb-3 dark:text-white'>Nombre mascota: <span className='font-normal capitalize'>{nombrePaciente}</span></p>
      <p className='font-bold uppercase text-gray-700 mb-3 dark:text-white'>Propietario: <span className='font-normal capitalize'>{nombreAcudiente}</span></p>
      <p className='font-bold uppercase text-gray-700 mb-3 dark:text-white'>Email: <span className='font-normal normal-case'>{email}</span></p>
      <p className='font-bold uppercase text-gray-700 mb-3 dark:text-white'>Fecha de cita: <span className='font-normal normal-case'>{fecha}</span></p>
      <p className='font-bold uppercase text-gray-700 mb-3 dark:text-white'>Síntomas: <span className='font-normal normal-case'>{observacion}</span></p>
      <div className='flex justify-between mt-6'>
        <button
          type='button'
          className='py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg uppercase dark:bg-sky-400 dark:hover:bg-sky-500'
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type='button'
          className='py-2 px-5 bg-red-600 hover:bg-red-700 text-white rounded-lg uppercase'
          onClick={handlerEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
