import AboutMe from '/images/About-Me.png';
import { TechContainer } from './TechContainer';
import { ProjectContainer } from './ProjectContainer';
import { Experience } from './Experience';
import { Contact } from './Contact';

export const Window = () => {
    return (
        <div className="h-[100%] w-full max-w-[1200px] border border-[rgb(181,184,254)] bg-[url('../images/Wallpaper.webp')] bg-[length:15px_15px] bg-repeat rounded-xl p-10 overflow-y-scroll scroll-smooth floatDiv">
            <div className='w-full flex flex-col items-center space-y-10'>

                {/* About Me */}
                <div
                    id='about-me'
                    className='h-full lg:w-[90%] md:w-[98%] w-[90%] bg-white rounded-xl shadow-xl overflow-hidden p-6 mb-10 scroll-mt-10 floatDiv'>
                    <div className='flex h-fit w-full bg-white overflow-y-scroll'>

                        <img
                            src={AboutMe}
                            alt="About Me"
                            draggable="false"
                            className='w-[50%] hidden lg:flex md:flex object-contain'
                        />

                        <div className='flex flex-col'>
                            <h2 className='text-4xl font-semibold text-rose-300 text-left pb-4 border-r-4 border-r-white overflow-hidden whitespace-nowrap'>Hi, I'm Dana ･ᴗ･</h2>
                            <p className=''>I'm a front-end developer with a focus on building responsive, user-centered applications. <br></br> <br></br> What started with customizing Tumblr themes grew into a passion for developing thoughtful, tailored tools — especially when existing solutions didn't quite fit the bill. I enjoy designing intuitive experiences and writing clean, maintainable code that solves real-world problems. <br></br> <br></br> Outside of work, you can find me playing games on my Switch, or planning my next road trip with the playlist queued and snacks in hand.</p>
                        </div>
                    </div>
                </div>

                {/* Tech */}
                <div id='tech'>
                    <TechContainer />
                </div>

                {/* Projects */}
                <div
                    id='projects'
                    className="w-full pb-6 scroll-mt-10">
                    <ProjectContainer />
                </div>

                {/* Experience */}
                <div
                    id='experience'
                    className='pb-6 scroll-mt-10'>
                    <Experience />
                </div>

                {/* Contact */}
                <div
                    id='contact'
                    className='w-[90%] scroll-mt-10'>
                    <Contact />
                </div>

            </div>
        </div>
    )
}
