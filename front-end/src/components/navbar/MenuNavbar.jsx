import React from 'react'

const MenuNavbar = () => {
  return (
    <div className='p-3 grid grid-cols-1 mx-auto justify-center items-center w-[50%]'>
        <div className='flex justify-around'>
            <div className='font-medium cursor-pointer'>Home</div>
            <div className='font-medium cursor-pointer'>Products</div>
            <div className='font-medium cursor-pointer'>About</div>
            <div className='font-medium cursor-pointer'>Contacts</div>
        </div>

    </div>
  )
}

export default MenuNavbar