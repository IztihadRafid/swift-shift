import image from "../../../assets/customer-top.png"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styel.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import feedbackIcon from "../../../assets/reviewQuote.png"
import user from "../../../assets/user.png"
import user2 from "../../../assets/user2.png"
const CustomersFeedback = () => {
    return (
        <div>
            <div className=" w-80 md:w-[832px] mx-auto">
                <div className="flex justify-center items-center"><img className="  w-[250px] " src={image} alt="image" /></div>
                <h1 className="text-center text-2xl md:text-3xl font-bold text-[#03373D] my-5">What our customers are sayings</h1>
                <p className="text-center text-gray-600 my-5">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>



            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="bg-white p-3 rounded-3xl">
                        <div >
                            <img className="w-20" src={feedbackIcon} alt="review image" />
                            <p className="text-gray-700">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. </p>
                            <div className="divider"></div>
                            <div className="flex">
                                <img className="w-24 h-20" src={user} alt="user" />
                                <div>
                                    <h1 className="text-[#03373D] text-lg font-semibold">Awlad Hossin</h1>
                                    <p className="text-gray-700 font-semibold">Senior Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                   <SwiperSlide className="bg-white p-3 rounded-3xl">
                        <div >
                            <img className="w-20" src={feedbackIcon} alt="review image" />
                            <p className="text-gray-700">This posture corrector has really improved my daily comfort. I feel less strain during long hours at work.</p>
                            <div className="divider"></div>
                            <div className="flex">
                                <img className="w-24 h-20" src={user} alt="user" />
                                <div>
                                    <h1 className="text-[#03373D] text-lg font-semibold">Tanvir Ahmed</h1>
                                    <p className="text-gray-700 font-semibold">CTO</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                     <SwiperSlide className="bg-white p-3 rounded-3xl">
                        <div >
                            <img className="w-20" src={feedbackIcon} alt="review image" />
                            <p className="text-gray-700">An excellent product that blends functionality with simplicity. It’s a must-have for maintaining a healthy lifestyle.</p>
                            <div className="divider"></div>
                            <div className="flex">
                                <img className="w-24 h-20" src={user2} alt="user" />
                                <div>
                                    <h1 className="text-[#03373D] text-lg font-semibold">Mariam Rahman</h1>
                                    <p className="text-gray-700 font-semibold">Chief Executive Officer (CEO)</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white p-3 rounded-3xl">
                        <div >
                            <img className="w-20" src={feedbackIcon} alt="review image" />
                            <p className="text-gray-700">I appreciate the thoughtful design. It’s sleek, easy to wear, and provides the right amount of support without being intrusive.</p>
                            <div className="divider"></div>
                            <div className="flex">
                                <img className="w-24 h-20" src={user} alt="user" />
                                <div>
                                    <h1 className="text-[#03373D] text-lg font-semibold">Rafiq Hasan</h1>
                                    <p className="text-gray-700 font-semibold">Senior Designer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                      <SwiperSlide className="bg-white p-3 rounded-3xl">
                        <div >
                            <img className="w-20" src={feedbackIcon} alt="review image" />
                            <p className="text-gray-700">As a customer, I’ve noticed a real difference in my posture. It’s comfortable and effective — exactly what I was looking for.</p>
                            <div className="divider"></div>
                            <div className="flex">
                                <img className="w-24 h-20" src={user2} alt="user" />
                                <div>
                                    <h1 className="text-[#03373D] text-lg font-semibold">Sadia Karim</h1>
                                    <p className="text-gray-700 font-semibold">Client</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default CustomersFeedback;