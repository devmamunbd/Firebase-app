import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='flex gap-5 items-center h-16 px-10'>

    <Link className='mr-auto'><h1 className='font-bold text-sm px-6 py-2 rounded-md bg-neutral-900 text-white'>Firebase</h1></Link>

    <Link to='/login' className='px-6 py-2 rounded-md font-bold text-sm bg-neutral-900 text-white'>Login</Link>
    <Link to='/register' className='px-6 py-2 rounded-md font-bold text-sm bg-neutral-900 text-white'>Register</Link>


    </header>
    </>
  )
}

export default Header