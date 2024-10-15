import { useState } from "react";
import Wheel from "./Wheel";
import {AnimatePresence, motion} from "framer-motion"

export default function Menu() {
    const [[angle, index], setData] = useState([0,0]);
  return (
    <div className='w-full aspect-square flex justify-center items-center relative'>

    <div className='absolute size-5/6 border-2 border-dashed border-black rounded-full'/>
      
    <motion.div animate={{rotate:angle}} transition={{ease:'linear', duration:0.3}} className='absolute size-full'>
      <Wheel/>
    </motion.div>

    <div className='size-full flex justify-center items-center relative'>
    <AnimatePresence>
<motion.img
  key={`src/assets/image${index}.svg`}
  src={`src/assets/image${index}.svg`}
  initial={{ rotate: -90, scale:0 }}
  animate={{ rotate: 0, scale: 1 }}
  exit={{ rotate: -90, scale: 0 }}
  transition={{
    duration:0.3
  }}
  className='w-1/2 rounded-full absolute'
/>
</AnimatePresence>
    </div>

    <div className='absolute bottom-0 px-12 py-4 w-full flex justify-between'>
      <button className={`p-3 bg-orange-600 rounded-full active:bg-black ${(index === 0 && "opacity-0")}`} onClick={()=>setData([angle-60,Math.abs(index-1)%3])}>
        <img src="src/assets/down-arrow.svg" alt="" />
      </button>

      <button className='p-3 bg-orange-600 rounded-full active:bg-black' onClick={()=>setData([angle+60,(index+1)%3])}>
        <img src="src/assets/down-arrow.svg" alt="" />
      </button>
    </div>

  </div>
  )
}
