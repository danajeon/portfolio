import './index.css'
import './App.css'
import { ProfileCard } from './components/ProfileCard'
import { NavBar } from './components/NavBar'
import { Window } from './components/Window'

function App() {
  return (
    <div className="h-screen w-full flex flex-row bg-[#FFF3FE] p-8 gap-5 rounded-xl floatDiv">
      <div className='h-full w-[20%] flex flex-col gap-3'>
        <ProfileCard />
        <NavBar />
      </div>
      <div className='h-full w-[80%] flex flex-col overflow-hidden floatDiv'>
        <Window />
      </div>
    </div>
  )
}

export default App
