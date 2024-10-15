import { div } from 'framer-motion/client';
import Menu from './components/Menu';
import Description from './components/description';

function App() {
  

  return (
     <div>
      <nav className='py-4'>
        fbf
      </nav>
      <div className='border-2 border-black flex items-center'>
      <div className='w-3/5 -z-0'>
      <Description/>
      </div>
      <div className='w-2/5 -z-0'>
        <Menu/>
      </div>

      <div className='absolute -top-[120%] -right-96 w-full aspect-square rounded-full bg-orange-400 -z-50' />
     </div>
     </div>
  )
}

export default App
