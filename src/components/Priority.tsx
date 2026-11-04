import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";


type TaskPriority = 'High'| 'Medium'| 'Low'
type TaskPriorityOption = {
  name: TaskPriority
  color: string
}

export const Priority = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>('select')
    
    
    const toggleDropDown = () => setIsOpen(prev => !prev)
    
    
    
    const handlePrioritySelect = (priority: TaskPriority) => {
      setSelected(priority)
      setIsOpen(false)
    }
    
    
     const priorities: TaskPriorityOption[] = [
      {
        name: 'High',
        color: 'bg-pink-100 text-pink-700 '
      },
      {
        name: 'Medium',
        color: 'bg-orange-100 text-orange-700 '
      },
      {
        name: 'Low',
        color: 'bg-gray-100 text-gray-700 '
      }
    ]
  return (
    <div className={`relative flex flex-row items-center rounded-md py-0.5 px-1.5 gap-1 ${priorities.find(priority => priority.name === selected)?.color}`}>
                  <h2>{selected} </h2>
                  <button onClick={toggleDropDown} className='cursor-pointer'><LuChevronDown /></button>
                  {isOpen && (
                    <ul className='text-sm rounded-xl border border-[#d9dce0] py-1.5 px-1.5 absolute top-full left-0 z-10 whitespace-nowrap bg-white shadow-lg'>
                      {priorities.map((priority) =>(
                        <li onClick={() => handlePrioritySelect(priority.name)} key={priority.name} className={`cursor-pointer py-0.5 px-1.5 hover:bg-gray-100 rounded-md ${priority.color}`}>
                        {priority.name}
                      </li>
                      ))}
                    </ul>
                  )}
                </div>
  )
}
