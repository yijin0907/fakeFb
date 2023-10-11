import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Booth: React.FC = () => {
    const counters = Array.from({ length: 20 })
    return (
        <>
            <div className="card pr-0 flex">
                <Swiper
                    className="swiper-container"
                    loop={false}
                    slidesPerView={'auto'}
                    navigation={true}
                    modules={[Navigation]}
                >
                    <SwiperSlide className="swiper-slide">
                        <button className="mr-4 px-4 h-[40px] ring-2 ring-gray-600 flex items-center rounded-full focus:outline-none">
                            <div className="w-[24px]">
                                <img src="https://bruce-fe-fb.web.app/image/video.svg" alt="" />
                            </div>
                            <p className="ml-2 text-fb text-sm font-bold">建立包廂</p>
                        </button>
                    </SwiperSlide>
                    {counters.map((_, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="w-[55px]">
                                    <div className="relative w-[40px] cursor-pointer">
                                        <div className="overflow-hidden rounded-full">
                                            <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="" />
                                        </div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 ring-gray-900 ring"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default Booth
