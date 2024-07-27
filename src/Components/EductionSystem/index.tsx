const EducationSystem = () => {
  return (
    <div className="">
      <div className="bg-[#FFE4B5]">
        <div>
          <h1 className="text-[#FF5F6D] font-montserratExtrabold flex text-center justify-center md:py-16 py-8 px-12 md:px-24   md:text-7xl text-4xl ">
            STEM Education Through Text
          </h1>
        </div>
        <div className="container mx-auto pb-24">
          <div className="grid md:grid-cols-2  grid-cols-1 justify-center gap-12 md:px-0 px-4">
            {[1, 2, 3, 4].map(index => {
              return (
                <div key={index}>
                  <h3 className="text-[#62A0E3] font-montserratExtrabold tex-5xl flex justify-center py-4">
                    Morning Age 4-5
                  </h3>
                  <div className="relative hover:scale-105 transform transition-all duration-300 hover:z-10">
                    <div className="  font-montserratBold bg-white  rounded-md  px-8 py-3 card-content">
                      Hi Sarah! ☀️ Today's Mystery Message is about fluffy
                      clouds! ☁️ Did you know they're made of tiny water
                      droplets? Can you pretend to blow on a cotton ball and see
                      if you can make it float like a cloud? (Bonus Fact: Some
                      clouds are so high up, they're actually made of ice!)
                    </div>
                    <div className="speech-bubble-tip">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="103.353"
                        height="65"
                      >
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M59.061 0S48.456 47.001 0 65c0 0 52.672-1.999 103.353-56L59.061 0z"
                          data-name="Trazado 170"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSystem;
