import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth'
import { useCallback, useState, useRef } from 'react'
import { app } from '../config/firebase'
import { auth } from '../config/firebase'




const Login = () => {
const [ user, setUser ] = useState(null)

const GoogleProvider = new GoogleAuthProvider()

const auth = getAuth(app)

const updateUser = (data) => {
  setUser(data || auth.currentUser)
}



const singInWithGoogle = async () => {
  try {
   const res = await signInWithPopup(auth, GoogleProvider)
   updateUser(res.user)
   console.log(res)
  } 
  catch (error) {
    console.log(error)
  }
}

const handleSingout = async () => {
  try {
    await signOut(auth) 
    setUser(null)
  } catch (error) {
    console.log(error)
  }
}





console.log('currentUser', auth.currentUser)


const email = useRef('')
const pass= useRef('')

const onSubmit = useCallback(async (e) => {
  e.preventDefault()
try {
  const res = await signInWithEmailAndPassword(auth, email, pass)
  if(!auth.user.currentUser.emailVerified) {
    console.log('email sending')
    await sendEmailVerification(auth.currentUser)
    console.log('send email')
    alert('check your email')
  }
  console.log(res)
} catch (error) {
  console.log(error)
}
}, [auth])


const emailRegex = /([A-Z])\w+/g

const handleResetPassword = useCallback(async () => {
  try {
    if(!!email.current.value.match(emailRegex) === false){
      alert('Provide a valid email address')
    }
    await sendPasswordResetEmail(auth, email.current.value)
    alert('check your email')
  } catch (error) {
    console.log(error)
  }
})





  return (
    
    <section className="flex flex-col gap-3 justify-center items-center px-8 min-h-[400px]">
      {auth.currentUser ?  <button onClick={handleSingout} className="border rounded-md px-3 py-2 font-semibold">Sing Out</button> : (<>
      <button onClick={singInWithGoogle} className="border rounded-md px-3 py-2 font-semibold">Sing In With Google</button>
      
      <form className='flex flex-col gap-4 min-w-[400px]' onSubmit={onSubmit}>
      <div>
          <label className='block mb-2' htmlFor="email">Email Address</label>
          <input ref={email} className='border px-3 py-2 rounded-sm w-full' type="email" id="email" placeholder="Email Address" />
        </div>
        <div>
          <label className='block mb-2' htmlFor="password">Password</label>
          <input ref={pass} className='border px-3 py-2 rounded-sm w-full' type="password" id="password" placeholder="Enetr Passwprd" />
        </div>
        <span onClick={handleResetPassword}>Forget Password</span>
        <button className='px-3 py-2 bg-cyan-500 text-white border rounded-md' type='submit'>Login</button>
      </form>
      </>) }
    
   
      {auth.currentUser && (
    <>
    <h1>
    {auth.currentUser?.displayName}
    </h1>
    <img src={auth.currentUser?.photoURL} alt="Profile Photo" />
    </>
   )}
    </section>

  )
}

export default Login