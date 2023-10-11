const ThinkingList: React.FC = () => {
    return (
        <>
            <div className="card">
                <div className="flex pb-4">
                    <div className="w-[40px] rounded-full overflow-hidden mr-3">
                        <img src="https://bruce-fe-fb.web.app/image/avator.png" />
                    </div>
                    <div className="bg-fb-input flex-1 rounded-full flex items-center">
                        <p className="text-left text-sm pl-3 text-gray-400 ">布魯斯，在想些什麼？</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 flex pt-3">
                    <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                        <div className="w-[16px]">
                            <img src="https://bruce-fe-fb.web.app/image/camera.svg" alt="" />
                        </div>
                        <p className="text-gray-400 text-sm pl-1.5">直播視訊</p>
                    </button>
                    <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                        <div className="w-[16px]">
                            <img src="https://bruce-fe-fb.web.app/image/photo.svg" alt="" />
                        </div>
                        <p className="text-gray-400 text-sm pl-1.5">相片／影片</p>
                    </button>
                    <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                        <div className="w-[16px]">
                            <img src="https://bruce-fe-fb.web.app/image/feel.svg" alt="" />
                        </div>
                        <p className="text-gray-400 text-sm pl-1.5">感受／活動</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ThinkingList
