import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

type DropdownOption<T extends string> = {
  name: T;
  color: string;
};

type CustomDropdownProps<T extends string> = {
  options: readonly DropdownOption<T>[];
};

export const CustomDropdown = <T extends string,>({
  options,
}: CustomDropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<T | "select">("select");

     
    
  return (
    <div className={`relative flex flex-row items-center text-sm rounded-md py-0.5 px-1.5 gap-1 ${options.find(option => option.name === selected)?.color}`}>
                  <h2>{selected} </h2>
                  <button onClick={() => setIsOpen(prev => !prev)} className='cursor-pointer'><LuChevronDown /></button>
                  {isOpen && (
                    <ul className='text-sm rounded-xl border border-[#d9dce0] py-1.5 px-1.5 absolute top-full left-0 z-10 whitespace-nowrap bg-white shadow-lg'>
                      {options.map((option) =>(
                        <li onClick={() => {
                            setIsOpen(false)
                            setSelected(option.name)
                        }} key={option.name} className={`cursor-pointer py-0.5 px-1.5 hover:bg-gray-100 rounded-md ${option.color}`}>
                        {option.name}
                      </li>
                      ))}
                    </ul>
                  )}
                </div>
  )
}
