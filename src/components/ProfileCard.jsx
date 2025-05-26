import backgroundImg from "/images/Background.jpg";
import profileImg from "/images/Profile.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const ProfileCard = () => {
    return (
        <div className='bg-white border-2 border-black rounded-xl overflow-hidden relative'>
            <img
                src={backgroundImg}
                alt="Profile Background"
                draggable="false"
                className='h-[45%] w-full border-black border-b-2 object-cover'
            />
            <img
                src={profileImg}
                alt="Profile Picture"
                draggable="false"
                className='h-48 w-48 border-4 border-[#fad4e1] rounded-full absolute left-1/2 top-[45%] transform -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden object-cover'
            />
            <div className='h-[55%] w-full flex flex-col items-center justify-center pt-20'>
                <h1 className='text-xl'>Dana Jeon</h1>
                <h2 className='text-lg'>Software Engineer</h2>
                <div className='flex flex-row space-x-4 pt-2'>
                    <a href='https://github.com/danajeon' target="_blank">
                        <GitHubIcon
                            sx={{ fontSize: 45 }}
                            className='text-[#B5B8FF] hover:animate-colorPulse hover:cursor-pointer'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/dana-jeon-dev' target="_blank">
                        <LinkedInIcon
                            sx={{ fontSize: 45 }}
                            className='text-[#B5B8FF] hover:animate-colorPulse hover:cursor-pointer'
                        />
                    </a>
                </div>
            </div>
        </div >
    )
}