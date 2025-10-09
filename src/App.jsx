import './index.css'
import './App.css'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { ProfileCard } from './components/ProfileCard'
import { NavBar } from './components/NavBar'
import { Window } from './components/Window'


function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-screen">
      {/* large screen */}
      <div className="hidden lg:flex h-screen w-screen flex flex-row justify-center bg-[#FFF3FE] p-8 gap-5
    ">
        <div className='h-full w-[20%] flex flex-col gap-3'>
          <ProfileCard />
          <NavBar />
        </div>
        <div className='h-full w-fit flex flex-col rounded-xl overflow-hidden floatDiv'>
          <Window />
        </div>
      </div>

      {/* mobile screen */}
      <div className="lg:hidden flex w-screen flex flex-col items-center bg-[#FFF3FE] gap-5">
        <div className='w-screen bg-red-200 flex justify-end relative '>
          <div className="p-2 hover:cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon
              className='text-white'
            />
          </div>
          {menuOpen &&
            <div className="absolute top-10">
              <NavBar />
            </div>
          }
        </div>
        <div className='w-screen flex flex-row justify-center gap-3 p-2'>
          <ProfileCard />
        </div>
        <div className='h-full w-screen flex flex-col items-center rounded-xl overflow-hidden floatDiv p-2'>
          <Window />
        </div>
      </div>
    </div >
  )
}

export default App
