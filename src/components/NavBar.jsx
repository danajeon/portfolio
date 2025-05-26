export const NavBar = () => {
    return (
        <div className='flex justify-center bg-white border-2 border-black rounded-xl p-4 text-xl text-center text-[#888DFE] hover:cursor-pointer'>
            <nav>
                <ul>
                    <li className='hover:underline hover:underline-offset-2' onClick={() => scrollToSection('about-me')}>About Me</li>
                    <li className='hover:underline hover:underline-offset-2'>Tech</li>
                    <li className='hover:underline hover:underline-offset-2'>Projects</li>
                    <li className='hover:underline hover:underline-offset-2'>Experience</li>
                    <li className='hover:underline hover:underline-offset-2'>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
