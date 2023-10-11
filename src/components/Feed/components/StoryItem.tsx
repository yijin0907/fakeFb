import { useEffect, useState } from 'react'

const StoryItem: React.FC = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {}, [show])
    return (
        <>
            <div className="flex-1 px-[4px] min-w-[120px] cursor-pointer">
                <div
                    className="relative overflow-hidden"
                    onMouseOver={() => setShow(true)}
                    onMouseOut={() => setShow(false)}
                >
                    {!show ? '' : <div className="absolute w-full h-full top-0 left-0 bg-black/20 z-20"></div>}
                    <div className="hidden absolute w-full h-full top-0 left-0 bg-black/20 z-20"></div>
                    <div className="w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-30">
                        <p className="text-white text-sm">布</p>
                    </div>
                    <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
                    {show ? (
                        <img
                            className="w-full h-full duration-200 scale-105"
                            src="https://bruce-fe-fb.web.app/image/story.png"
                        />
                    ) : (
                        <img className="w-full h-full duration-200" src="https://bruce-fe-fb.web.app/image/story.png" />
                    )}

                    <p className="absolute bottom-2 left-2 text-white">布魯斯</p>
                </div>
            </div>
        </>
    )
}

export default StoryItem
