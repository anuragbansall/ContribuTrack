import React from 'react'

function Container({children}) {
  return (
    <div className='w-full 2xl:container mx-auto px-[2rem]'>
        {children}
    </div>
  )
}

export default Container