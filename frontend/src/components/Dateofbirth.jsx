import React, { useState } from "react"

const DateOfBirth = () => {

  const [month, setmonth] = useState("Month")
  const [open, setopen] = useState(false)
  const [date, setDate] = useState("")
  const [year, setYear] = useState("")

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ]

  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-gray-700">
        Date of Birth
      </label>

      <div className="flex gap-2">

        {/* Day */}
        
        <input
  type="number"
  value={date}
  onChange={(e)=>{
    const value = e.target.value

    if(value === "" || (value >= 1 && value <= 31)){
      setDate(value)
    }
  }}
  placeholder="Date"
  className="w-16 border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
/>


        {/* Month Dropdown */}
        <div className="relative w-32">

          <button
            onClick={() => setopen(!open)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-left flex justify-between items-center hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            {month}
            <span className="text-gray-500">▼</span>
          </button>

          {open && (
            <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">

              {months.map((m) => (
                <li
                  key={m}
                  onClick={() => {
                    setmonth(m)
                    setopen(false)
                  }}
                  className="px-3 py-2 cursor-pointer hover:bg-blue-50"
                >
                  {m}
                </li>
              ))}

            </ul>
          )}

        </div>

        {/* Year */}
        <input
  type="number"
  value={year}
  onChange={(e)=>{
    const value = e.target.value

    if(value === "" || (value <= 2026)){
      setYear(value)
    }
  }}
  placeholder="Year"
  className="w-20 border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
/>


      </div>

    </div>
  )
}

export default DateOfBirth