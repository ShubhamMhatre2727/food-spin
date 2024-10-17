import Menu from './components/Menu';
import Description from './components/Description';

function App() {
  

  return (
     <div className='w-dvw h-dvh relative overflow-hidden bg-orange-400'>
      
      <nav className='w-full flex justify-center items-center h-[10%] text-black text-center'>
        <h1 className='w-[20%] text-xl font-bold z-50'>
          FoodSpin
        </h1>
        <div className='w-[80%] font-bold text-sm flex items-center gap-20 z-50'>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
      </nav>
      <div className='h-full flex items-center justify-around -z-30'>
        <Description/>
        <Menu/>
      </div>

      <div className='absolute w-screen scale-150 -top-[120%] -right-[15%]'>
      <div className=''>
      <img src="src/assets/cover.svg" alt="" className='w-full aspect-square object-contain' />
      </div>
      </div>

     </div>
  )
}

export default App
