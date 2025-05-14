import React from 'react'

export const NavBar = () => {
    return (
        <div className='flex justify-center bg-white border-2 border-black rounded-xl p-4 text-xl text-center text-[#888DFE] hover:cursor-pointer'>
            <nav>
                <ul>
                    <a href='#about-me'>
                        <li className='hover:underline'>About Me</li>
                    </a>
                    <a href='#tech'>
                        <li className='hover:underline'>Tech</li>
                    </a>
                    <a href='#projects'>
                        <li className='hover:underline'>Projects</li>
                    </a>
                    <a href='#experience'>
                        <li className='hover:underline'>Experience</li>
                    </a>
                    <a href='contact'>
                        <li className='hover:underline'>Contact</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}
