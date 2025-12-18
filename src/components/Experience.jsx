

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
                        Delivered a Shopify storefront redesign using custom Liquid, HTML, CSS, and JavaScript, collaborating directly with the client and launching ahead of schedule with reported increases in traffic and sales.
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
                        Contributed to front-end development on a cross-functional Agile team of 9, implementing features, participating in GitHub pull requests and code reviews, and working from Jira-managed sprints and Figma designs.
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
                        <div className="text-lg font-black">Front-end Developer</div>
                        <div className="italic">Hack for LA</div>
                        Contributed front-end updates to a large-scale open-source civic tech project by resolving GitHub-tracked issues through a structured review and approval workflow.
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
                        <div className="text-lg font-black">Histolgy Technician (IHC) Team Lead</div>
                        <div className="italic">Finan Templeton Dermatopathology Associates</div>
                        Lead a cross-functional team in a high-volume laboratory environment, overseeing 1,000+ IHC stains monthly while improving productivity by ~20% and refining SOPs to enhance quality and onboarding.
                    </div>
                </li>
            </ul>
        </div>
    )
}
