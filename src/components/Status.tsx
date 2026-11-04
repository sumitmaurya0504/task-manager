import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

type TaskStatus = 'Not Started' | 'In Progress' | 'Done'
type TaskStatusOption = {
  name: TaskStatus
  color: string
}

export const Status = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('select')

  const toggleDropDown = () => setIsOpen(prev => !prev)

  const handleStatusSelect = (status: TaskStatus) => {
    setSelected(status)
    setIsOpen(false)
  }

  const statuses: TaskStatusOption[] = [
    {
      name: 'Not Started',
      color: 'bg-red-100 text-red-700 '
    },
    {
      name: 'In Progress',
      color: 'bg-blue-100 text-blue-700 '
    },
    {
      name: 'Done',
      color: 'bg-green-100 text-green-700 '
    }
  ]

  return (
    <div className={`relative flex flex-row items-center text-sm rounded-md py-0.5 px-1.5 gap-1 ${statuses.find(status => status.name === selected)?.color}`}>
      <h4>{selected}</h4>
      <button onClick={toggleDropDown} className='cursor-pointer'><LuChevronDown /></button>
      {isOpen && (
        <ul className='text-sm rounded-xl border border-[#d9dce0] py-1.5 px-1.5 absolute top-full left-0 z-10 whitespace-nowrap bg-white shadow-lg'>
          {statuses.map((status) => (
            <li onClick={() => handleStatusSelect(status.name)} key={status.name} className={`cursor-pointer py-0.5 px-1.5 hover:bg-gray-100 rounded-md ${status.color}`}>
              {status.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

