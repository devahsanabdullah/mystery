import workingImg from '../../assets/workinImg.png';
function WorkingBlock() {
  return (
    <div>
      <div className="bg-[#35C5C0] md:pt-8 px-11  pt-12">
        <div className="container mx-auto md:pt-14  px-4 lg:px-0 ">
          <div className="grid  text-center items-center justify-center md:px-4 lg:pb-32 pb-14">
            <div>
              <h2 className="text-white font-montserratExtrabold lg:text-8xl md:text-6xl  text-5xl">
                How It Works
              </h2>
            </div>
          </div>

          <div className="">
            <div className="grid lg:grid-cols-3 grid-cols-1  gap-2">
              <div className="flex justify-center items-end relative lg:mb-0 mb-8">
                <div className="absolute lg:left-28 lg:-top-48 hidden  lg:flex justify-center items-start ">
                  <img
                    src={workingImg}
                    className="w-72 md:block hidden "
                    alt="workingImg"
                  />
                </div>
                <div className="bg-[#FF7799] rounded-tl-full rounded-tr-full h-full mt-5 w-80 lg:absolute  hover:scale-105 transform transition-all duration-300 hover:z-10">
                  <div className="text-center">
                    <h2 className="text-white font-montserratBold   lg:text-6xl text-4xl mt-16">
                      1.
                    </h2>
                    <div className="text-white text-center lg:text-4xl text-2xl">
                      <h2 className="font-montserratBold  lg:px-20 pt-8  ">
                        Easy Sign up
                      </h2>
                      <p className="font-montserratExtrabold text-lg   lg:px-14 py-7 px-4">
                        Add links to papers, sites, or other resources related
                        to your topic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-end   lg:mb-0 mb-8">
                <div className="bg-[#FF7799] rounded-tl-full rounded-tr-full md:h-[110%] w-80 hover:scale-105 transform transition-all duration-300 hover:z-10">
                  <div className="text-center">
                    <h2 className="text-white font-montserratBold lg:text-6xl text-4xl mt-16">
                      2.
                    </h2>
                    <div className="text-white  text-center lg:text-4xl text-2xl">
                      <h2 className="font-montserratBold   px-7 pt-4">
                        Daily Doses of
                        <br />
                        Science
                      </h2>
                      <p className="font-montserratExtrabold text-lg font-bold  lg:px-14 py-7 px-4">
                        Add links to papers, sites, or other resources related
                        to your topic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-end  lg:mb-0 mb-8 ">
                <div className="bg-[#FF7799] rounded-tl-full rounded-tr-full lg::h-[120%] w-80 hover:scale-105 transform transition-all duration-300 hover:z-10">
                  <div className="text-center">
                    <h2 className="text-white font-montserratBold   lg:text-6xl text-4xl mt-16">
                      3.
                    </h2>
                    <div className="text-white  text-center lg:text-4xl text-2xl">
                      <h2 className="font-montserratBold  font-bold px-7 pt-4">
                      Springboard  <br /> for <br /> Deeper Learning
                      </h2>
                      <p className="font-montserratExtrabold    text-lg font-bold  lg:px-14 py-7 px-4">
                        Add links to papers, sites, or other resources related
                        to your topic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingBlock;
