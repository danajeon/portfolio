import { useRef, useState } from 'react';
import { useTiltEffect } from '../hooks/useTiltEffect.js';

const TechCard = ({ logo, label }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const tiltHandlers = useTiltEffect(cardRef, glowRef);

  const [textShow, setTextShow] = useState(false)
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div className={`w-[12%] flex flex-col justify-center items-center text-[#182934] perspective-[1000px] aspect-1/1 ${mouseEnter ? "" : "animate-bouncy"} rounded-[100%]`}
      onMouseEnter={() => {
        setTextShow(true);
        setMouseEnter(true)
      }}
      onMouseLeave={() => {
        setTextShow(false); setMouseEnter(false)
      }}>
      <div
        ref={cardRef}
        {...tiltHandlers}
        className={`w-50 flex flex-col justify-center items-center bg-white border-4 border-[#FAD4E1] rounded-full shadow-black shadow-md relative aspect-1/1 transform-style-preserve-3d transition-transform duration-1000 ease-out hover:shadow-lg hover:scale-120`}
      >
        <img
          src={logo}
          className='scale-[60%] object-contain object-no-repeat' />
        {textShow && <div className='h-full w-full justify-center items-center bg-[rgba(255,205,205,1)] rounded-full p-2 absolute top-0 left-0 hidden 
          lg:flex 
          md:flex'>
          <span className='text-center text-[black] text-lg font-bold hidden techyFont 
            lg:block 
            md:block'>
            {label}
          </span>
        </div>
        }
        <div
          ref={glowRef}
          className="h-full w-full z-10 rounded-full top-0 left-0 absolute opacity-100 mix-blend-soft-light pointer-events-none"
        />
      </div>
      <span
        className='text-center text-[#182934] text-xs pt-1
          lg:hidden 
          md:hidden'
      >
        {label}
      </span>
    </div>
  );
};

export default TechCard;