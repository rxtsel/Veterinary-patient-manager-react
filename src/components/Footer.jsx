const Footer = () => {
  return (
    <div
      className='text-center text-xl mb-10'
    >
      <p
        className='text-black dark:text-gray-200'
      >Made by <a
        href='http://github.com/rxtsel'
        target='_blank'
        rel='noopener noreferrer'
               >
        <span className='text-indigo-700 hover:text-indigo-800 cursor-pointer dark:text-sky-400'>
          Rxtsel. {' '}
        </span>
      </a>
        All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
