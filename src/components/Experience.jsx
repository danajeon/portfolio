

export const Experience = () => {
    return (
        <div>
            <h3 className="w-full text-center text-rose-300 text-4xl font-semibold pb-6">
                Experience
            </h3>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-[rgba(181,184,254,0.2)] rounded-xl p-10 mb-10 floatDiv">
                <li>
                    <div className="timeline-middle text-rose-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <time className="lg:block md:block hidden timeline-end absolute top-0 font-mono">March 2025 - May 2025</time>
                    <div className="timeline-start mb-10 md:text-end bg-[white] rounded-xl floatDiv p-3 max-md:timeline-start w-full">
                        <time className="font-mono lg:hidden md:hidden block">March 2025 - May 2025</time>
                        <div className="text-lg font-black">Front-end Developer</div>
                        <div className="italic">Freelance</div>
                        Enhanced a Shopify-based e-commerce site by refining UI layouts, customizing Liquid templates, and improving user flow to increase accessibility and conversion rates.
                    </div>
                    <hr className="bg-white" />
                </li>
                <li>
                    <hr className="bg-white" />
                    <div className="timeline-middle text-rose-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <time className="lg:block md:block hidden timeline-start absolute top-0 font-mono">November 2024 - December 2024</time>
                    <div className="lg:timeline-end md:timeline-end timeline-start md:mb-10 bg-[white] rounded-xl floatDiv p-3 w-full">
                        <time className="font-mono lg:hidden md:hidden block">November 2024 - December 2024</time>
                        <div className="text-lg font-black">Software Developer</div>
                        <div className="italic">Chingu</div>
                        Collaborated remotely with a team of 9 to build SolarRise (sustainable energy platform), implementing data validation, UX improvements, and Google Maps API integrations.
                    </div>
                    <hr className="bg-white" />
                </li>
                <li>
                    <hr className="bg-white" />
                    <div className="timeline-middle text-rose-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <time className="lg:block md:block hidden timeline-end absolute top-0 font-mono">March 2024 - June 2024</time>
                    <div className="timeline-start md:mb-10 md:text-end bg-[white] rounded-xl floatDiv p-3 w-full">
                        <time className="font-mono lg:hidden md:hidden block">March 2024 - June 2024</time>
                        <div className="text-lg font-black">Full-stack Developer</div>
                        <div className="italic">Hack for LA</div>
                        Improved the performance and maintainability of a non-profit website by refactoring code and eliminating unnecessary variables, resulting in cleaner and more efficient code.
                    </div>
                    <hr className="bg-white" />
                </li>
                <li className="">
                    <hr className="bg-white" />
                    <div className="timeline-middle text-rose-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <time className="lg:block md:block hidden timeline-start absolute top-0 font-mono">August 2021 - Present</time>
                    <div className="lg:timeline-end md:timeline-end timeline-start md:mb-10 bg-[white] rounded-xl floatDiv p-3 w-full">
                        <time className="font-mono lg:hidden md:hidden block">August 2021 - Present</time>
                        <div className="text-lg font-black">Histolgy Technician (IHC Team Lead)</div>
                        <div className="italic">Finan Templeton Dermatopathology Associates</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
