import Menu from './components/Menu';
import Description from './components/Description';

function App() {
  

  return (
     <div className='w-dvw h-dvh relative overflow-hidden'>
      
      <nav className='border w-full h-[10%]'>
        nav
      </nav>
      <div className='border h-full flex items-center justify-around -z-30'>
        <Description/>
        <Menu/>
      </div>
      <div className='absolute w-screen scale-150 -top-[130%] -right-[20%] -z-10'>
      <img src="src/assets/cover.svg" alt="" className='w-full aspect-square object-contain' />
      </div>
     </div>
  )
}

export default App
