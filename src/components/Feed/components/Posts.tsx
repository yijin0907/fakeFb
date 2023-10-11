const Posts: React.FC = () => {
    return (
        <>
            <div className="card pb-0 px-0">
                <div className="flex px-4">
                    <div className="w-[44px] rounded-full overflow-hidden mr-3">
                        <img src="https://bruce-fe-fb.web.app/image/avator.png" />
                    </div>
                    <div className="flex-1">
                        <p className="text-white">布魯斯前端</p>
                        <div className="flex items-center text-gray-400 text-sm">
                            <div>5小時</div>
                            <div>．</div>
                            <div className="w-[12px]">
                                <img className="w-full" src="https://bruce-fe-fb.web.app/image/earth.svg" />
                            </div>
                        </div>
                    </div>
                    <button className="w-[12px] focus:outline-none">
                        <img src="https://bruce-fe-fb.web.app/image/more.svg" alt="" />
                    </button>
                </div>
                <p className="text-base text-gray-300 mt-3 px-4">【布魯斯】手作蛋糕高雄分店開幕囉！！</p>
                <a href="#" className="block mt-3">
                    <div className="w-full overflow-hidden h-[260px]">
                        <img src="https://bruce-fe-fb.web.app/image/item.png" className="object-cover w-full" />
                    </div>
                    <div className="bg-fb-input w-full px-4 py-2 text-white">
                        <p className="text-gray-400 text-sm">WWW.BRUCEFE.COM</p>
                        <p className="text-lg">【布魯斯】手作蛋糕高雄分店開幕囉！！</p>
                    </div>
                </a>
                <div className="px-4">
                    <div className="border-b border-gray-700 flex justify-between py-3">
                        <div className="flex items-center">
                            <div className="w-[18px] mr-2">
                                <img src="https://bruce-fe-fb.web.app/image/like-blue.svg" />
                            </div>
                            <p className="text-sm text-gray-400">990</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm text-gray-400 mr-2">4則留言</p>
                            <p className="text-sm text-gray-400">1次分享</p>
                        </div>
                    </div>
                    <div className="flex items-center py-2">
                        <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                            <div className="w-[16px]">
                                <img src="https://bruce-fe-fb.web.app/image/like.svg" alt="" />
                            </div>
                            <p className="text-gray-400 text-sm pl-1.5">讚</p>
                        </button>
                        <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                            <div className="w-[16px]">
                                <img src="https://bruce-fe-fb.web.app/image/chat.svg" alt="" />
                            </div>
                            <p className="text-gray-400 text-sm pl-1.5">留言</p>
                        </button>
                        <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                            <div className="w-[16px]">
                                <img src="https://bruce-fe-fb.web.app/image/share.svg" alt="" />
                            </div>
                            <p className="text-gray-400 text-sm pl-1.5">分享</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts
