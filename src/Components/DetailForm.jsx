import React, { useState, useContext } from 'react'
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function DetailForm() {

    const [usernameVal, setUsernameVal] = useState('')
    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault()
        navigate(`/${usernameVal}`)
    }

  return (
    <div>
        <h2 className='text-2xl font-semibold'>GSSOC'24 EXTD User Contributions</h2>
        <p className='my-2 text-zinc-300'>Enter a GitHub username to view your contributions in GSSOC</p>
        <form className='flex flex-col items-start' onSubmit={handleFormSubmit}>
            <h3 className='font-semibold text-zinc-300 text-xl mt-6 mb-2'>GitHub Username</h3>
            <Input
                type='text'
                placeholder='Enter a username'
                value={usernameVal}
                setValue={setUsernameVal}
                className='w-full mb-4'
            />
            <Button
                label="Fetch Details"
                className='w-full'
            />
        </form>
    </div>
  )
}

export default DetailForm