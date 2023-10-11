const MsgPanel: React.FC = () => {
    return (
        <>
            <div
                className="popover-panel"
                id="msg-panel"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <p className="text-white mb-3 text-2xl">Messsenger</p>
                <div className=" bg-fb-input rounded-full py-1 px-3 flex items-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[18px] h-[18px] mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#9ba3af"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        className="w-full bg-transparent focus:outline-none text-white"
                        placeholder="搜尋 Messsenger"
                    />
                </div>
                <div className="flex items-center mb-2 p-2 rounded-lg hover:bg-fb-input cursor-pointer">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
                        <img
                            className="w-full object-cover"
                            src="https://bruce-fe-fb.web.app/image/avator.png"
                            alt=""
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-base text-white mb-[2px]">布魯斯</p>
                        <p className="text-sm text-gray-400">TailwindCSS讚讚！・1分鐘前</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MsgPanel
