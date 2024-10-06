import React from 'react'

function Input({type="text", placeholder, value, setValue, className="", ...props}) {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={(event) => setValue(event.target.value)} {...props} className={`outline-none border-none bg-[#283039] px-4 py-2 rounded-md ${className}`} />
  )
}

export default Input