import React from 'react';
import Navbar from '../../Components/Navbar';
import priceImage from '../../assets/pricing.png';

const Pricing = () => {
  return (
    <div className="bg-[#FFE4B5] min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto flex-grow flex flex-col justify-center">
        <h1 className="text-[#62A0E3] md:text-6xl text-4xl font-bold flex justify-start ">
          Pricing plans
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 mt-8">
          <div className="flex justify-center items-end relative lg:mb-0 mb-8">
            <div className="bg-[#FF7799] rounded-tl-full rounded-tr-full h-full mt-5 w-80 lg:absolute ">
              {/* hover:scale-105 transform transition-all duration-300 hover:z-10 */}
              <div className="text-center">
                <h2 className="text-white font-montserratBold   lg:text-4xl text-2xl mt-32">
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
                <button className="bg-[#62A0E3] text-white font-montserratBold px-4 py-2  mt-2 mb-4 rounded-full">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end   lg:mb-0 mb-8">
            <div className="bg-[#35C5C0] rounded-tl-full rounded-tr-full h-full  w-80 ">
              <div className="text-center">
                <h2 className="text-white font-montserratBold lg:text-5xl text-2xl mt-24">
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
                <button className="bg-[#62A0E3] text-white font-montserratBold px-4 mt-2 mb-4 py-2 rounded-full">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end  relative  lg:mb-0 mb-8 ">
            <div className="absolute lg:right-16 lg:-top-[92px]  hidden lg:flex justify-center items-start ">
              <img src={priceImage} alt={priceImage} className="w-36" />
            </div>

            <div className="bg-[#62A0E3] rounded-tl-full rounded-tr-full h-full w-80  lg:absolute -z-0">
                
              <div className="text-center">
                <h2 className="text-white font-montserratBold   lg:text-4xl text-4xl mt-16">
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
                <button className="bg-[#F27253] text-white font-montserratBold mt-2 py-2  px-4 mb-4 rounded-full">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
