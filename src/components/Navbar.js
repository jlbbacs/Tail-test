import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
const [nav, setNav] = useState(false)
const handleNav = () => {
    setNav(!nav)
}
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px]  text-white  mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Erza.Com</h1>

            <ul className='hidden md:flex'>

                <li className='p-4'> <a href='#'>Home</a></li>
                <li className='p-4'> <a href='#'>Company</a></li>
                <li className='p-4'> <a href='#'>Resources</a></li>
                <li className='p-4'> <a href='#'>About</a></li>
                <li className='p-4'> <a href='#'>Contact</a></li>
            </ul>
            
            <div onClick={handleNav} className='block md:hidden'> 
                {!nav ?  <AiOutlineClose size={20}/> :<AiOutlineMenu size ={20}/>}
              
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bordered border-gray-900x bg-[#bcc1bc] ease-in-out duration-300 text-black' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#101110] m-4'>Erza.com</h1> 

                <ul className='uppercase pt-4'>    
                    <li className='p-4 '>Home</li>
                    <li className='p-4 border border-x-0 gray-600'>Company</li>
                    <li className='p-4 border border-x-0 gray-600'>Recources</li>
                    <li className='p-4 border border-x-0 gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>       

            </div>
            
    </div>
  )
}

export default Navbar
