const PlusPanel: React.FC = () => {
    return (
        <>
            <div
                className="popover-panel"
                id="plus-panel"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <p className="text-white mb-3 text-2xl">建立</p>
                <div className="flex item-center p-1 mb-2 hover:bg-fb-input rounded-lg cursor-pointer">
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
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-white mb-[2px]">貼文</p>
                        <p className="text-xs text-gray-400">在動態消息分享貼文</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlusPanel
