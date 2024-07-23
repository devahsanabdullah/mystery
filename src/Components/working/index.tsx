import workingImg from '../../assets/workinImg.png';
function WorkingBlock() {
  return (
    <div>
      <div className="bg-[#35C5C0] md:pt-8 px-11  pt-12">
        <div className="container mx-auto md:pt-14  px-4 lg:px-0 ">
          <div className="grid  text-center items-center justify-center md:px-4 md:pb-32 pb-14">
            <div>
              <h2 className="text-white font-montserratBold md:text-6xl text-2xl">
                How It Works
              </h2>
            </div>
          </div>

          <div className="">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
              <div className="flex justify-center items-end relative md:mb-0 mb-8">
                <div className="absolute md:left-28 md:-top-48   flex justify-center items-start ">
                  <img
                    src={workingImg}
                    className="w-72 md:block hidden "
                    alt="workingImg"
                  />
                </div>
                <div className="bg-[#FF7799] rounded-tl-full rounded-tr-full h-full mt-5 w-80 md:absolute  hover:scale-105 transform transition-all duration-300 hover:z-10">
                  <div className="text-center">
                    <h2 className="text-white font-montserratBold md:text-6xl text-4xl mt-16">
                      1.
                    </h2>
                    <div className="text-white text-center md:text-4xl text-2xl">
                      <h2 className="font-montserratBold md:px-20 pt-8  ">
                        Easy Sign up
                      </h2>
                      <p className="font-montserratBold text-lg   md:px-14 py-7 px-4">
                        Add links to papers, sites, or other resources related
                        to your topic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-end   md:mb-0 mb-8">
                <div className="bg-[#FF7799] rounded-tl-full rounded-tr-full md:h-[110%] w-80 hover:scale-105 transform transition-all duration-300 hover:z-10">
                  <div className="text-center">
                    <h2 className="text-white font-montserratBold md:text-6xl text-4xl mt-16">
                      2.
                    </h2>
                    <div className="text-white  text-center md:text-4xl text-2xl">
                      <h2 className="font-montserratBold px-7 pt-4">
                        Daily Doses of
                        <br />
                        Science
                      </h2>
                      <p className="font-montserratBold text-lg font-bold  md:px-14 py-7 px-4">
                        Add links to papers, sites, or other resources related
                        to your topic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-end  md:mb-0 mb-8 ">
                <div className="bg-[#FF7799] rounded-tl-full rounded-tr-full md:h-[120%] w-80 hover:scale-105 transform transition-all duration-300 hover:z-10">
                  <div className="text-center">
                    <h2 className="text-white font-montserratBold md:text-6xl text-4xl mt-16">
                      3.
                    </h2>
                    <div className="text-white  text-center md:text-4xl text-2xl">
                      <h2 className="font-montserratBold px-7 pt-4">
                        Daily Doses of
                        <br />
                        Science
                      </h2>
                      <p className="font-montserratBold text-lg font-bold  md:px-14 py-7 px-4">
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
