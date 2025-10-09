export const NavBar = () => {
    return (
        <div className='flex justify-center bg-white border border-[rgb(181,184,254)] rounded-xl p-4 text-xl text-[rgb(181,184,254)] hover:cursor-pointer techyFont floatDiv'>
            <nav className="flex flex-col">
                <a
                    href="#about-me"
                    className='hover:underline hover:underline-offset-2'>
                    About Me
                </a>
                <a
                    href="#tech"
                    className='hover:underline hover:underline-offset-2'>
                    Tech
                </a>
                <a
                    href="#projects"
                    className='hover:underline hover:underline-offset-2'>
                    Projects
                </a>
                <a
                    href="#experience"
                    className='hover:underline hover:underline-offset-2'>
                    Experience
                </a>
                <a
                    href="#contact"
                    className='hover:underline hover:underline-offset-2'>
                    Contact
                </a>
            </nav>
        </div>
    )
}
