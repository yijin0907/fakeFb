const Information: React.FC = () => {
    const listArr = [
        {
            name: '布魯斯',
            img: 'https://bruce-fe-fb.web.app/image/avator.png',
        },
        {
            name: '活動',
            img: 'https://bruce-fe-fb.web.app/image/left/activity.svg',
        },
        {
            name: '天氣',
            img: 'https://bruce-fe-fb.web.app/image/left/cloudy.png',
        },
        {
            name: '災害應變中心',
            img: 'https://bruce-fe-fb.web.app/image/left/dynamic.svg',
        },
        {
            name: '新冠病毒資訊中心',
            img: 'https://bruce-fe-fb.web.app/image/left/facemask.svg',
        },
        {
            name: '社團',
            img: 'https://bruce-fe-fb.web.app/image/left/friend.svg',
        },
        {
            name: '企業管理平台',
            img: 'https://bruce-fe-fb.web.app/image/left/job.png',
        },
        {
            name: 'Messenger',
            img: 'https://bruce-fe-fb.web.app/image/left/messenger.svg',
        },
        {
            name: '近期廣告動態',
            img: 'https://bruce-fe-fb.web.app/image/left/pay.png',
        },
        {
            name: '朋友名單',
            img: 'https://bruce-fe-fb.web.app/image/left/sale.png',
        },
        {
            name: '最愛',
            img: 'https://bruce-fe-fb.web.app/image/left/star.svg',
        },
        {
            name: 'Marketplace',
            img: 'https://bruce-fe-fb.web.app/image/left/store.svg',
        },
        {
            name: 'Watch',
            img: 'https://bruce-fe-fb.web.app/image/left/watchingTv.svg',
        },
    ]
    return (
        <>
            <div className="hidden sticky top-main-span max-w-[360px] w-full h-full pl-4 lg:block">
                {listArr.map((value) => {
                    return (
                        <div
                            className=" flex items-center justify-items-center w-full p-2 mb-1 rounded hover:bg-fb-input cursor-pointer"
                            key={`${value.name}`}
                        >
                            <div className="w-[32px] overflow-hidden rounded-full mr-4">
                                <img src={`${value.img}`} alt="" />
                            </div>
                            <p className="text-white text-[.9rem]">${value.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Information
