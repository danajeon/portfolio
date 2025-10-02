import AboutMe from '/images/About-Me.png'

const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', black: 'start' });
    }
};

export const Window = () => {
    return (
        <div className="h-[100%] w-full max-w-[1200px] border border-[rgb(181,184,254)] bg-[url('../images/Wallpaper.webp')] bg-[length:15px_15px] bg-repeat rounded-xl p-10 overflow-y-scroll floatDiv">
            <div className='flex flex-col items-center space-y-10'>

                {/* About Me */}
                <div
                    id='about-me'
                    className='h-full w-[80%] bg-white rounded-xl shadow-xl overflow-hidden p-6 floatDiv'>
                    <div className='flex h-fit w-full bg-white overflow-y-scroll'>
                        <img
                            src={AboutMe}
                            alt="About Me"
                            draggable="false"
                            className='w-[50%]'
                        />
                        <div className='flex flex-col'>
                            <h2 className='text-4xl font-semibold text-rose-300 text-center pb-4'>Hi, I'm Dana ･ᴗ･</h2>
                            <p className=''>I'm a full-stack software engineer with a focus on building responsive, user-centered applications. <br></br> <br></br> What started with customizing Tumblr themes grew into a passion for developing thoughtful, tailored tools — especially when existing solutions didn't quite fit the bill. I enjoy designing intuitive experiences and writing clean, maintainable code that solves real-world problems. <br></br> <br></br> Outside of work, you can find me playing games on my Switch, or planning my next road trip with the playlist queued and snacks in hand.</p>
                        </div>
                    </div>
                </div>

                {/* Tech */}
                <div id='tech'>

                </div>

                {/* Projects */}
                {/* https://codepen.io/kotAndy/pen/gOBgXvO */}
                <div id='projects'></div>

                {/* Experience */}
                <div id='experience'></div>

                {/* Contact */}
                <div id='contact'></div>

            </div>
        </div>
    )
}
