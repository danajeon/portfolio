import backgroundImg from "/images/Background.jpg";
import profileImg from "/images/Profile.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TbFileCv } from "react-icons/tb";

export const ProfileCard = () => {
    return (
        <div className='border border-[rgb(181,184,254)] bg-white rounded-xl overflow-hidden relative techyFont floatDiv w-screen lg:w-auto h-[450px] lg:h-auto z-2'>
            <img
                src={backgroundImg}
                alt="Profile Background"
                draggable="false"
                className='h-[45%] w-full object-cover'
            />
            <img
                src={profileImg}
                alt="Profile Picture"
                draggable="false"
                className='aspect-1 lg:max-w-[170px] max-w-[80px] border-4 border-[#FAD4E1] rounded-full absolute left-1/2 top-[45%] transform -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden object-cover'
            />
            <div className='h-[55%] w-full flex flex-col items-center justify-center pt-20'>
                <h1 className='text-xl pt-5 lg:text-2xl'>Dana Jeon</h1>
                <h2 className='text-center p-2'>Front-end Developer</h2>
                <div className='flex flex-row text-[35px] space-x-4 pt-2 pb-5 items-center'>
                    <a href='https://github.com/danajeon' target="_blank">
                        <GitHubIcon
                            sx={{ fontSize: 'inherit' }}
                            className='text-[#B5B8FF] hover:animate-colorPulse hover:cursor-pointer'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/dana-jeon-dev' target="_blank">
                        <LinkedInIcon
                            sx={{ fontSize: 'inherit' }}
                            className='text-[#B5B8FF] hover:animate-colorPulse hover:cursor-pointer'
                        />
                    </a>
                    <a href={''}
                        className='hover:animate-colorPulse hover:cursor-pointer mt-1'
                        style={{ color: '#B5B8FF' }}>
                        <TbFileCv />
                    </a>
                </div>
            </div>
        </div >
    )
}