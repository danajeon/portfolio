import React from 'react'

export const NavBar = () => {
    return (
        <div className='flex justify-center bg-white border-2 border-black rounded-xl p-4 text-xl text-center text-[#888DFE] hover:cursor-pointer'>
            <nav>
                <ul>
                    <li className='hover:underline'>About Me</li>
                    <li className='hover:underline'>Tech</li>
                    <li className='hover:underline'>Projects</li>
                    <li className='hover:underline'>Experience</li>
                    <li className='hover:underline'>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
