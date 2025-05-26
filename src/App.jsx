import './index.css'
import './App.css'
import { ProfileCard } from './components/ProfileCard'
import { NavBar } from './components/NavBar'
import { MusicPlayer } from './components/MusicPlayer'
import { Window } from './components/Window'

function App() {
  return (
    <div className='h-screen w-full flex flex-row bg-[#FFF3FE] p-8 gap-5'>
      <div className='h-full w-[20%] flex flex-col gap-3'>
        <ProfileCard />
        <MusicPlayer />
      </div>
      <div className='h-full w-[80%] flex flex-col overflow-hidden'>
        <Window />
      </div>
    </div>
  )
}

export default App
