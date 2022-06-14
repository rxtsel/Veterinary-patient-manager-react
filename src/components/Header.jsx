import Theme from './Theme'

const Header = () => {
  return (
    <>
      <h1
        className='text-center text-3xl md:text-4xl text-zinc-800 font-bold mt-5 dark:text-gray-200 relative uppercase mb-10'
      >
        Seguimiento Pacientes {' '}
        <span
          className='text-indigo-600 after:border-b-indigo-600 dark:after:border-b-sky-400 after:content-center after:absolute after:border-b-2 after:w-20 md:after:w-60 after:-bottom-4 after:left-0 after:right-0 after:mx-auto dark:text-sky-400'
        >
          Veterinaria
        </span>
      </h1>
      <Theme />
    </>
  )
}

export default Header
