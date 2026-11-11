type StatsCard = {
    title: string,
    value: number,
    color: string,
    icon: React.ReactNode
}

export const Overview = ({
    title, 
    value, 
    color,
    icon
}: StatsCard) => {
    return (
            <div className='flex flex-row justify-between items-center p-5 w-1/3 bg-white border border-[#d9dce0] rounded-xl'>
                <div className={`${color} text-5xl border  rounded-sm p-2 `}>{icon}</div>
                <div className='flex flex-col text-center'>
                    <h4 className='text-gray-500 text-l font-light'>{title}</h4>
                    <h3>{value}</h3>
                </div>
            </div>
    )
}

