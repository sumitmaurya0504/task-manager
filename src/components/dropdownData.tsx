import { RiListCheck3 } from "react-icons/ri"
import { GiProgression } from "react-icons/gi"
import { MdErrorOutline } from "react-icons/md" 

export const priorities = [
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
] as const

export const statuses = [
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
] as const

export const overviewData = [
    {
        title: 'Total Task',
        value: 3,
        color: 'text-[#2463EB] bg-[#2463eb56]',
        icon: <RiListCheck3 />
    },
     {
        title: 'Completed Task',
        value: 0,
        color: 'text-[#0ea50e] bg-[#0ea50e50]',
        icon: <GiProgression />
    },
     {
        title: 'Overdue Task',
        value: 0,
        color: 'text-[#fb8500] bg-[#fb860046]',
        icon: <MdErrorOutline />
    },
] as const