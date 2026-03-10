import React, {useState} from 'react'
import Name from '../../components/Name.jsx'
import Dateofbirth from '../../components/Dateofbirth.jsx'
import Email from '../../components/email.jsx'

const Register = () => {
  
  const [step, setStep] = useState(1)
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">

      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4 text-lg font-semibold text-center">
        Auth System
      </nav>

      {/* Form Card */}
      <div className="bg-white mt-10 p-8 rounded-xl shadow-lg w-80 flex flex-col gap-4">

        <h1 className="text-2xl font-bold text-center">
          Sign Up
        </h1>

        <h2 className="text-sm text-gray-500 text-center">
          Sign up to continue
        </h2>

        {step ===1 && <Name />}

        {step ===1 && <Dateofbirth />}
        
        {step ===2 && <Email />}

        {/* Register Button */}
        <button onClick={()=>{
          if({Name !=""}){
            setStep(step+1)
          }
          
        }} className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Next 
        </button>

      </div>

    </div>
  )
}

export default Register