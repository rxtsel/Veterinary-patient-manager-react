const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  // destructuring para llamar con variable en la lista:
  const {nombrePaciente, nombreAcudiente, email, fecha, observacion, id} = paciente
  const handlerEliminar =  () => {
    const respuesta = confirm('¿Estás seguro que deseas eliminar de la lista?')
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className="bg-white shadow-md md:ml-5 mb-5 px-5 py-10 rounded-lg">
      <p className="font-bold uppercase text-gray-700 mb-3">Nombre mascota: <span className="font-normal normal-case">{nombrePaciente}</span></p>
      <p className="font-bold uppercase text-gray-700 mb-3">Propietario: <span className="font-normal normal-case">{nombreAcudiente}</span></p>
      <p className="font-bold uppercase text-gray-700 mb-3">Email: <span className="font-normal normal-case">{email}</span></p>
      <p className="font-bold uppercase text-gray-700 mb-3">Fecha de cita: <span className="font-normal normal-case">{fecha}</span></p>
      <p className="font-bold uppercase text-gray-700 mb-3">Síntomas: <span className="font-normal normal-case">{observacion}</span></p>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg uppercase"
          onClick={ () => setPaciente(paciente) }
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-lg uppercase"
          onClick={ handlerEliminar }
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente