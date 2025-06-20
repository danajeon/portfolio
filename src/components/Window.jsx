import iconCloseWindow from '/images/icon-close-window.png'
import iconMaximizeWindow from '/images/icon-maximize-window.png'
import iconMinimizeWindow from '/images/icon-minimize-window.png'

const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', black: 'start' });
    }
};

export const Window = () => {
    return (
        <div className="h-[65%] w-full max-w-[1200px] bg-[url('../images/Wallpaper.webp')] bg-[length:15px_15px] bg-repeat border-2 border-black rounded-xl p-10 overflow-y-scroll">
            <div className='flex flex-col items-center space-y-10'>

                {/* About Me */}
                <div
                    id='about-me'
                    className='h-[300px] w-[80%] bg-white border-2 border-black rounded-xl shadow-xl overflow-hidden'>
                    <div className='h-[15%] w-full flex items-center justify-between bg-gradient-to-r from-[#D9B7E9] via-[#FFB4DE] to-[#FFB6C1] border-b-2 border-black'>
                        <div>
                            <span className='flex font-bold text-white indent-5'>About Me</span>
                        </div>
                        <div className='flex items-center ml-auto pr-3'>
                            <img
                                src={iconMinimizeWindow}
                                alt="Min"
                                draggable="false"
                            />
                            <img
                                src={iconMaximizeWindow}
                                alt="Max"
                                draggable="false"
                            />
                            <img
                                src={iconCloseWindow}
                                alt="Close"
                                draggable="false"
                            />
                        </div>
                    </div>
                    <div className='h-[85%] w-full bg-white p-5 overflow-y-scroll'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id numquam dicta cumque ut delectus rerum doloremque, quas amet, exercitationem nisi voluptatibus voluptas dolorum harum aperiam nulla aliquam iste mollitia eius.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id numquam dicta cumque ut delectus rerum doloremque, quas amet, exercitationem nisi voluptatibus voluptas dolorum harum aperiam nulla aliquam iste mollitia eius.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id numquam dicta cumque ut delectus rerum doloremque, quas amet, exercitationem nisi voluptatibus voluptas dolorum harum aperiam nulla aliquam iste mollitia eius.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id numquam dicta cumque ut delectus rerum doloremque, quas amet, exercitationem nisi voluptatibus voluptas dolorum harum aperiam nulla aliquam iste mollitia eius.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id numquam dicta cumque ut delectus rerum doloremque, quas amet, exercitationem nisi voluptatibus voluptas dolorum harum aperiam nulla aliquam iste mollitia eius.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id numquam dicta cumque ut delectus rerum doloremque, quas amet, exercitationem nisi voluptatibus voluptas dolorum harum aperiam nulla aliquam iste mollitia eius.</p>
                    </div>
                </div>

                {/* Tech */}
                <div id='tech'></div>

                {/* Projects */}
                <div id='projects'></div>

                {/* Experience */}
                <div id='experience'></div>

                {/* Contact */}
                <div id='contact'></div>

            </div>
        </div>
    )
}
