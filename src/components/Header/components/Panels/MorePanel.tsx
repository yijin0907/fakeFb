const MorePanel: React.FC = () => {
    return (
        <>
            <div
                className="popover-panel"
                id="more-panel"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
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
                        <p className="text-sm text-gray-400">查看你的個人檔案</p>
                    </div>
                </div>
                <div className="flex p-1 mb-2 items-center hover:bg-fb-input rounded-lg cursor-pointer">
                    <div className="bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            stroke="white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                    </div>
                    <p className="flex-1 text-white">登出</p>
                </div>
            </div>
        </>
    )
}

export default MorePanel
