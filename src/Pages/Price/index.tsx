import priceImage from '../../assets/pricing.png';
import Slider from 'react-slick';

import { settings } from '../../Constants/swiper';

const Pricing = () => {
  return (
    <div className="bg-[#FFE4B5] py-16 flex flex-col">
      <div className="container mx-auto flex-grow flex flex-col justify-center">
        <h1 className="text-[#62A0E3] md:text-6xl text-4xl font-bold flex justify-start ">
          Pricing plans
        </h1>
        <div className="md:block hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 mt-8 ">
            <div className="flex justify-center items-end relative lg:mb-0 mb-8">
              <div className="bg-[#FF7799] flex flex-col justify-between  items-center rounded-tl-full rounded-tr-full h-full mt-5 w-80 hover:scale-105 transform transition-all duration-300 hover:z-10 ">
                {/* hover:scale-105 transform transition-all duration-300 hover:z-10 */}
                <div className="text-center">
                  <h2 className="text-white font-montserratBold    text-5xl mt-32">
                    Basic Tier
                  </h2>
                  <div className="text-white text-center lg:text-4xl text-2xl">
                    <h2 className="font-montserratBold   px-7 pt-4">
                      $12. <sup>99</sup>
                      <span className="text-base">/ month</span>
                    </h2>
                    <p className="font-montserratExtrabold text-lg   lg:px-14 py-7 px-4">
                      One morning text Monday, Wednesday and Friday
                    </p>
                  </div>
                </div>
                <button className="bg-[#62A0E3] flex justify-center w-40 mb-6 items-center text-white font-montserratBold px-4 py-2  mt-2 rounded-full ">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            <div className="flex justify-center items-end   lg:mb-0 mb-8">
              <div className="bg-[#35C5C0] flex flex-col justify-between  items-center rounded-tl-full rounded-tr-full h-full  w-80 hover:scale-105 transform transition-all duration-300 hover:z-10  ">
                <div className="text-center">
                  <h2 className="text-white font-montserratBold  text-5xl mt-24">
                    Standard Tier
                  </h2>
                  <div className="text-white  text-center lg:text-4xl text-2xl">
                    <h2 className="font-montserratBold   px-7 pt-4">
                      $12. <sup>99</sup>{' '}
                      <span className="text-base">/ month</span>
                    </h2>
                    <p className="font-montserratExtrabold text-lg font-bold  lg:px-12 py-7 px-12">
                      One text every morning on weekdays
                    </p>
                  </div>
                </div>
                <button className="bg-[#62A0E3] flex justify-center w-40  items-center text-white font-montserratBold px-4 mt-2 mb-4 py-2 rounded-full">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            <div className="flex justify-center items-end  relative  lg:mb-0 mb-8 ">
              <div className="absolute lg:right-16 lg:-top-[92px]  hidden lg:flex justify-center items-start ">
                <img src={priceImage} alt={priceImage} className="w-36" />
              </div>

              <div className="bg-[#62A0E3] flex flex-col justify-between  items-center rounded-tl-full rounded-tr-full h-full w-80  lg:absolute -z-0 hover:scale-105 transform transition-all duration-300 hover:z-10 ">
                <div className="text-center">
                  <h2 className="text-white font-montserratBold   text-5xl  mt-16">
                    Pro Tier
                  </h2>
                  <div className="text-white  text-center lg:text-4xl text-2xl">
                    <h2 className="font-montserratBold   px-7 pt-4">
                      $13. <sup>99</sup>{' '}
                      <span className="text-base">/ month</span>
                    </h2>
                    <p className="font-montserratExtrabold    text-lg font-bold  lg:px-14 py-7 px-4">
                      Two texts per day every day, including weekends
                    </p>
                    <p className="font-montserratExtrabold   text-sm font-bold  lg:px-12  px-4">
                      with the option to customize and shut off texts on certain
                      days.
                    </p>
                  </div>
                </div>
                <button className="bg-[#F27253] flex justify-center w-40 mb-6  text-white font-montserratBold mt-2 py-2  px-4  rounded-full">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* small device */}
        <div className="md:hidden block">
          <div className="container mx-auto mt-8">
            <Slider {...settings}>
              <div className="flex justify-center items-end  mb-8 px-4">
                <div className="bg-[#FF7799] flex flex-col justify-between items-center rounded-tl-full rounded-tr-full h-[28rem]  max-w-60  ">
                  <div className="text-center">
                    <h2 className="text-white font-montserratBold text-4xl mt-24">
                      Basic Tier
                    </h2>
                    <div className="text-white text-center lg:text-4xl text-2xl">
                      <h2 className="font-montserratBold px-7 pt-4">
                        $12. <sup>99</sup>
                        <span className="text-base">/ month</span>
                      </h2>
                      <p className="font-montserratExtrabold text-lg lg:px-14 py-10 px-4">
                        One morning text Monday, Wednesday, and Friday
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#62A0E3] flex justify-center w-40 mb-6 items-center text-white font-montserratBold px-4 py-2 mt-2 rounded-full">
                    SUBSCRIBE
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-end mb-8 px-4">
                <div className="bg-[#35C5C0] flex flex-col justify-between items-center rounded-tl-full rounded-tr-full h-[28rem] max-w-60 ">
                  <div className="text-center">
                    <h2 className="text-white font-montserratBold text-4xl mt-24">
                      Standard Tier
                    </h2>
                    <div className="text-white text-center  text-2xl">
                      <h2 className="font-montserratBold px-7 pt-4">
                        $12. <sup>99</sup>
                        <span className="text-base">/ month</span>
                      </h2>
                      <p className="font-montserratExtrabold text-lg lg:px-12 py-7 px-12">
                        One text every morning on weekdays
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#62A0E3] flex justify-center w-40 items-center text-white font-montserratBold px-4 mt-2 mb-4 py-2 rounded-full">
                    SUBSCRIBE
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-end relative mb-8 px-4">
                <div className="absolute lg:right-16 lg:-top-[92px] hidden lg:flex justify-center items-start">
                  <img src={priceImage} alt="Pro Tier Image" className="w-36" />
                </div>
                <div className="bg-[#62A0E3] flex flex-col justify-between items-center rounded-tl-full rounded-tr-full h-[28rem] max-w-60 lg:absolute -z-0  ">
                  <div className="text-center">
                    <h2 className="text-white font-montserratBold text-4xl mt-16">
                      Pro Tier
                    </h2>
                    <div className="text-white text-center lg:text-4xl text-2xl">
                      <h2 className="font-montserratBold px-7 pt-4">
                        $13. <sup>99</sup>
                        <span className="text-base">/ month</span>
                      </h2>
                      <p className="font-montserratExtrabold text-lg lg:px-14 py-7 px-4">
                        Two texts per day every day, including weekends
                      </p>
                      <p className="font-montserratExtrabold text-sm lg:px-12 px-4">
                        with the option to customize and shut off texts on
                        certain days.
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#F27253] flex justify-center w-40 mb-6 text-white font-montserratBold mt-2 py-2 px-4 rounded-full">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
