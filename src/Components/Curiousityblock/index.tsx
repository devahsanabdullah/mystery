import curiousityimg from '../../assets/curiousityimg.png';

const Curiousityblock = () => {
  return (
    <div className="">
      <div className="bg-[#62A0E3] ">
        
          <div>
            <h1 className="text-white font-montserratBold  pt-16 pl-4 lg:pl-16 pb-8 lg:text-8xl md:text-6xl text-5xl   lg:w-[64rem] text-start">
              Unlock curiosity one text at a time.
            </h1>
          </div>
      

        <div className="grid md:grid-rows-3 grid-rows-2 grid-flow-col">
          <div className="row-span-3 hidden lg:block relative">
            <img
              src={curiousityimg}
              className="w-full h-auto md:ml-3"
              alt="Curiosity"
            />
          </div>
          <div className="row-span-3 col-span-1 flex items-center justify-center  md:p-0 ">
            <div className="lg:row-span-3 col-span-1 flex items-center justify-center pl-12 pt-5 lg:p-0 relative">
              <div className="bg-[#FF5F6D] md:p-8 p-8 lg:p-14 text-center rounded-tl-[60px] rounded-bl-[60px] transform transition-transform duration-300 hover:translate-y-[-30px] hover:z-10">
                <p className="text-white text-start font-montserratExtrabold md:text-2xl text-base">
                  Welcome to Morning Mystery, where engaging STEM education
                  arrives directly to your phone. Every morning, spark your
                  child's curiosity with captivating, age-specific STEM content
                  designed to inspire and educate. Kickstart their day and
                  evening with discovery, foster a love for learning, and watch
                  as they explore the wonders of science, technology,
                  engineering, and math. Start their morning off right—with a
                  daily dose of wonder!
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={curiousityimg}
          className="w-[400px] h-auto lg:hidden block p-4 "
          alt="Curiosity"
        />
      </div>
    </div>
  );
};

export default Curiousityblock;
