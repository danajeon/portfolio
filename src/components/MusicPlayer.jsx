import { useState, useRef, useEffect } from 'react'
import iconCloseWindow from '/images/icon-close-window.png'
import iconMaximizeWindow from '/images/icon-maximize-window.png'
import iconMinimizeWindow from '/images/icon-minimize-window.png'
import musicNote from '/images/music-note.jpg'
import cd from '/images/cd.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const tracks = [
    { title: "track1", src: "/music/track1.mp3" },
    { title: "track2", src: "/music/track2.mp3" }
]

export const MusicPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(0); // Refers to which track in tracks array
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [progress, setProgress] = useState(0);

    // Play/pause toggle
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        }
        else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    }

    // Play next track
    const playNext = () => {
        const next = (currentTrack + 1) % tracks.length;
        setCurrentTrack(next);
        setIsPlaying(true);
        setTimeout(() => audioRef.current.play(), 0);
    }

    // Play previous track
    const playPrevious = () => {
        const previous = (currentTrack - 1 + tracks.length) % tracks.length;
        setCurrentTrack(previous);
        setIsPlaying(true);
        setTimeout(() => audioRef.current.play(), 0);
    }

    // Progress bar
    useEffect(() => {
        const audio = audioRef.current;
        const updateProgress = () => {
            if (audio && audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };
        audio.addEventListener('timeupdate', updateProgress);
        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, []);

    return (
        <div className='h-[35%] w-full border-2 border-black rounded-xl overflow-hidden'>
            <div className='h-[13%] w-full flex items-center justify-between bg-gradient-to-r from-[#D9B7E9] via-[#FFB4DE] to-[#FFB6C1] border-b-2 border-black'>
                <div>
                    <span className='flex font-bold text-white text-xs indent-4'>music-player.exe</span>
                </div>
                <div className='flex items-center pr-2'>
                    <img src={iconMinimizeWindow} alt="Min" className='h-5' />
                    <img src={iconMaximizeWindow} alt="Max" className='h-5' />
                    <img src={iconCloseWindow} alt="Close" className='h-5' />
                </div>
            </div>
            <div className='h-[87%] bg-white p-4 relative'>
                <audio
                    src={tracks[currentTrack].src}
                    ref={audioRef}
                    onEnded={() => setIsPlaying(false)}
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                />

                {/* Album art and track title */}
                <div className='flex flex-row items-center gap-12 mb-4'>
                    <div className='h-[70px] w-[90px] relative'>
                        <img
                            src={musicNote}
                            alt="Album Art"
                            draggable="false"
                            className='h-[65px] w-[65px] border border-gray-200 rounded-md absolute left-3 top-0 z-10'
                        />
                        <img
                            src={cd}
                            alt="CD"
                            draggable="false"
                            className='h-[65px] w-[65px] absolute left-3 top-0 z-0 translate-x-1/2'
                        />
                    </div>
                    <div className='bg-neutral-100 border border-gray-300 shadow-inner rounded-md text-gray-400 text-xs px-4 py-2'>{`♫ ` + tracks[currentTrack].title}</div>
                </div>
                <div
                    className="w-full h-1 bg-gray-200 rounded-full relative mb-4 cursor-pointer"
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const offsetX = e.clientX - rect.left;
                        const width = rect.width;
                        const clickPosition = offsetX / width;
                        const audio = audioRef.current;
                        audio.currentTime = clickPosition * audio.duration;
                    }}
                >
                    {/* Progress bar */}
                    <div
                        className="h-full bg-gradient-to-r from-[#D9B7E9] via-[#FFB4DE] to-[#FFB6C1] rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                    {/* Tracker */}
                    <div
                        className="h-3 w-3 bg-neutral-100 border border-gray-300 rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                        style={{ left: `${progress}%` }}
                    />
                </div>

                {/* Controls */}
                <div className='flex flex-row justify-center'>
                    <button
                        onClick={playPrevious}>
                        <SkipPreviousIcon
                            sx={{
                                fontSize: 25,
                                color: 'thistle',
                            }}
                        />
                    </button>
                    <div className='bg-neutral-100 border border-gray-300 shadow-inner rounded-full p-1'>
                        <button
                            onClick={togglePlay}>
                            {isPlaying ?
                                <PauseIcon
                                    sx={{
                                        fontSize: 35,
                                        color: 'thistle',
                                    }}
                                />
                                :
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: 35,
                                        color: 'thistle',
                                    }}
                                />}
                        </button>
                    </div>
                    <button
                        onClick={playNext}>
                        <SkipNextIcon
                            sx={{
                                fontSize: 25,
                                color: 'thistle',
                            }}
                        />
                    </button>
                </div>
            </div >
        </div>
    )
}