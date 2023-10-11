const ContactList: React.FC = () => {
    const counters = Array.from({ length: 8 })
    return (
        <>
            <div className="hidden sticky top-main-span max-w-[360px] w-full h-full lg:block">
                <p className="mb-2 text-lg text-gray-400">聯絡人</p>
                {counters.map((_, index) => (
                    <div
                        className="flex items-center justify-items-center w-full py-2 px-1 rounded hover:bg-fb-input cursor-pointer"
                        key={index}
                    >
                        <div className="w-[45px]">
                            <div className="relative w-[32px] cursor-pointer">
                                <div className="overflow-hidden rounded-full">
                                    <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="" />
                                </div>
                                <div className="w-[8px] h-[8px] rounded-full bg-green-500 absolute bottom-0 right-0 ring-gray-900 ring"></div>
                            </div>
                        </div>
                        <p className="text-white text-[.9rem]">布魯斯</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ContactList
