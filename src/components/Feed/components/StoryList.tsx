import StoryItem from './StoryItem'

const StoryList: React.FC = () => {
    const counters = Array.from({ length: 5 })
    return (
        <>
            <div className="relative">
                <div className="flex overflow-x-auto no-scrollbar">
                    <div className="flex-1 px-[4px] min-w-[120px] cursor-pointer">
                        <div className="h-full flex flex-col">
                            <div className="h-full overflow-hidden">
                                <img
                                    className="object-cover w-full h-full duration-500 hover:scale-105"
                                    src="https://bruce-fe-fb.web.app/image/avator.png"
                                />
                            </div>
                            <div className="bg-fb-card pt-6 px-2 pb-2 relative">
                                <button className="w-[32px] h-[32px] p-2 absolute -top-4 left-[calc(50%-16px)] bg-fb rounded-full focus:outline-none ring-fb-card ring flex justify-center items-center">
                                    <img src="https://bruce-fe-fb.web.app/image/plus.svg" />
                                </button>
                                <p className="w-full text-center text-white">建立限時動態</p>
                            </div>
                        </div>
                    </div>
                    {counters.map((_, index) => {
                        return <StoryItem key={index} />
                    })}
                </div>
                <button className="absolute popover-btn -right-3 top-[calc(50%-22.5px)] z-30 w-[45px] h-[45px]">
                    <img src="https://bruce-fe-fb.web.app/image/right-arrow.svg" />
                </button>
            </div>
        </>
    )
}

export default StoryList
