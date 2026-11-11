import './App.css'
import { FiPlus } from "react-icons/fi"
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { CustomDropdown } from './components/CustomDropDown';
import { overviewData, priorities, statuses } from './components/dropdownData';
import { Overview } from './components/Overview'

function App() {

  return (
    <div className='min-h-screen max-w-screen flex flex-col p-7 bg-[#e1e1e17b]'>
      {/* navbar */}
      <nav className='flex justify-between sticky top-0 w-full min-h-25 items-center'>
        <div className='flex flex-col gap-2 ml-5 '>
          <h1 className='text-black text-4xl font-medium'>My Task</h1>
          <h3 className='text-gray-500 text-l font-light'>Manage daily tasks</h3>
        </div>
        <div className='flex flex-row gap-3'>
          <button className='flex flex-row items-center gap-1 px-3 py-1.5  rounded-sm bg-white'>
            <HiAdjustmentsHorizontal /> Filter
          </button>
          <button className=' flex flex-row items-center gap-1 px-2 py-1.5 rounded-sm bg-[#2463EB] text-white font-light'>
            <FiPlus /> Create Task
          </button>
        </div>
      </nav>
      {/* overview content */}
      <div className='w-full h-35 bg-white flex flex-row justify-between gap-4 p-4 rounded-xl'>
        {overviewData.map((item) => (<Overview key={item.title} {...item} />))}
      </div>
      {/* task content */}
      <div className='flex flex-row flex-wrap'>
        {/* task container */}
        <div className='flex flex-col justify-around bg-white border border-[#d9dce0] rounded-xl p-4 h-50 w-2/7 m-6'>
          <div className='flex flex-row justify-between text-sm'>
            <h2>Priority</h2>
            <CustomDropdown options={priorities} />
          </div>
          <div className='flex flex-col justify-between '>
            <h2 className='text-xl '>Work</h2>
            <h4 className='text-gray-500 text-md font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ullam?</h4>
          </div>
          <div className='flex flex-row justify-between items-center '>
            <h2 className='font-light text-sm'>due to: 5 Apr</h2>
            <CustomDropdown options={statuses} />
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
