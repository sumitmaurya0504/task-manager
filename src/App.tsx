
import './App.css'
import { FiPlus } from "react-icons/fi"
import { LuChevronDown } from "react-icons/lu";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { RiListCheck3 } from "react-icons/ri"
import { GiProgression } from "react-icons/gi"
import { MdErrorOutline } from "react-icons/md"

function App() {

  return (
    <div className='min-h-screen max-w-screen flex flex-col p-7'>
      <nav className='flex justify-between sticky top-0 w-full min-h-25 items-center'>
        <div className='flex flex-col gap-2 ml-5 '>
          <h1 className='text-black text-4xl font-medium'>My Task</h1>
          <h3 className='text-gray-500 text-l font-light'>Manage daily tasks</h3>
        </div>
        <div className='flex flex-row gap-3'>
          <button className='flex flex-row items-center gap-1 px-3 py-1.5 border border-[#d9dce0] rounded-sm bg-[#e9eff4]'>
           <HiAdjustmentsHorizontal /> Filter
          </button>
          <button className=' flex flex-row items-center gap-1 px-2 py-1.5 rounded-sm bg-[#2463EB] text-white font-light'>
           <FiPlus /> Create Task
          </button>
        </div>
      </nav>
      <div className='w-full h-35 bg-[#e9eff47c] flex flex-row justify-between gap-4 p-4 rounded-xl'>{/* overview content */}
        <div className='flex flex-row justify-between items-center p-4 w-1/3 bg-white border border-[#d9dce0] rounded-xl'>
          <div className='text-5xl border  rounded-sm p-2 '><RiListCheck3 /></div>
          <div className='flex flex-col text-center'>
            <h4 className='text-gray-500 text-l font-light'>Total Task</h4>
            <h3>0</h3>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center p-4 w-1/3 bg-white border border-[#d9dce0] rounded-xl'>
          <div className='text-5xl border  rounded-sm p-2 '><GiProgression /></div>
          <div className='flex flex-col text-center'>
            <h4 className='text-gray-500 text-l font-light'>Completed Task</h4>
            <h3>0</h3>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center p-4 w-1/3 bg-white border border-[#d9dce0] rounded-xl'>
          <div className='text-5xl border  rounded-sm p-2 '><MdErrorOutline /></div>
          <div className='flex flex-col text-center'>
            <h4 className='text-gray-500 text-l font-light'>Overdue Task</h4>
            <h3>0</h3>
          </div>
        </div>
      </div>
      <div className='flex flex-row flex-wrap'>{/* task content */}
        <div className='flex flex-col justify-around bg-[#e9eff47c] border border-[#d9dce0] rounded-xl p-4 h-50 w-1/4 m-6'>{/* task container */}
          <div className='flex flex-row justify-between text-sm'>
          <h2>Priority</h2>
          <div className='flex flex-row items-center rounded-sm py-0.5 px-1.5 gap-1 text-[#0ed05f] bg-[#00ff6a5c]'>
          <h2>status </h2>
            <button className='cursor-pointer'><LuChevronDown /></button>
          </div>
          </div>
          <div className='flex flex-col justify-between '>
            <h2 className='text-xl '>Work</h2>
            <h4 className='text-gray-500 text-md font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam?</h4>
          </div>
          <div className='flex flex-row justify-between items-center '>
            <h4 className='font-light text-sm'>due to: 5 Apr</h4>
            <div className='flex flex-row items-center text-sm  rounded-sm py-0.5 px-1.5 gap-1 text-[#0ed05f] bg-[#00ff6a5c]'>
            <h4>progress</h4>
            <button className='cursor-pointer'><LuChevronDown /></button>
            </div>
          </div>
        </div>
       
      </div>

      </div>    
  )
}

export default App
