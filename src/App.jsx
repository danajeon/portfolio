import './index.css'
import './App.css'
import { ProfileCard } from './components/ProfileCard'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className='h-screen flex flex-row bg-[#FFF3FE] p-8 gap-5'>
      <div className='h-full w-[20%] flex flex-col justify-between min-h-0 gap-3'>
        <ProfileCard />
        <NavBar />
      </div>
      <div className='h-full w-[80%] flex flex-col border border-black rounded-xl'>
      </div>
    </div>
  )
}

export default App
