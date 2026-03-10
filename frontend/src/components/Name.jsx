import React, {useState} from 'react'

const Name = () => {
  
  const [name, setName] = useState("")
  
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-gray-700">
        Full Name
      </label>

      <input
        value = {name}
        onChange={(e)=>{
          let value = e.target.value
          if(/^[A-Za-z0-9 ]*$/.test(value) && value.length <=30){
            setName(value)
          }
        }}
        type="text"
        placeholder="Enter your full name"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 
        focus:outline-none focus:ring-1 focus:ring-green-500 
        focus:border-green-500"
      />

    </div>
  )
}

export default Name