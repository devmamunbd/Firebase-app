import { useCallback, useRef } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../config/firebase'


const Register = () => {

const name = useRef('')
const email = useRef('')
const pass= useRef('')



const onSubmit = useCallback (async (e) => {
  e.preventDefault()
  try {
    const res = await createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
    const result = await updateProfile(auth.currentUser, {displayName: name.current.value})
    console.log(res)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}, [])






  return (
    
    <section className='flex flex-col items-center justify-center min-h-[500px]'>
      <form className='flex flex-col gap-4 min-w-[400px]' onSubmit={onSubmit}>
      <div>
          <label className='block mb-2' htmlFor="name">Full Name</label>
          <input ref={name} className='border px-3 py-2 rounded-sm w-full' type="text" id="name" placeholder="Name" />
        </div>
        <div>
          <label className='block mb-2' htmlFor="email">Email Address</label>
          <input ref={email} className='border px-3 py-2 rounded-sm w-full' type="email" id="email" placeholder="Email Address" />
        </div>
        <div>
          <label className='block mb-2' htmlFor="password">Password</label>
          <input ref={pass} className='border px-3 py-2 rounded-sm w-full' type="password" id="password" placeholder="Enetr Passwprd" />
        </div>
        <button className='px-3 py-2 bg-cyan-500 text-white border rounded-md' type='submit'>Register</button>
      </form>
    </section>

  )
}

export default Register