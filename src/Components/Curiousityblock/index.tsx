import curiousityimg from '../../assets/curiousityimg.png';

const Curiousityblock = () => {
  return (
    <div className="">
      <div className="bg-[#62A0E3] ">
        <div className="container mx-auto pb-5 px-4 pt-8 md:pt-16 md:pl-24">
          <div>
            <h1 className="text-white font-montserratBold py-5 md:text-6xl text-4xl  md:w-[38rem] text-center md:text-start">
              Unlock curiosity one text at a time.
            </h1>
          </div>
        </div>

        <div className="grid md:grid-rows-3 grid-rows-2 grid-flow-col">
          <div className="row-span-3 hidden lg:block relative">
            <img
              src={curiousityimg}
              className="w-full h-auto md:ml-3"
              alt="Curiosity"
            />
          </div>
          <div className="row-span-3 col-span-1 flex items-center justify-center p-4  md:p-0 ">
            {/* <div className="bg-[#FF5F6D] p-6 ml-16 lg:ml-0 md:p-12 text-center rounded-tl-[60px] rounded-bl-[60px] hover:scale-105 transform transition-all duration-300 hover:z-10 ">
              <p className="text-white font-montserratBold md:text-2xl text-base">
                Welcome to Morning Mystery, where engaging STEM education
                arrives directly to your phone. Every morning, spark your
                child's curiosity with captivating, age-specific STEM content
                designed to inspire and educate. Kickstart their day and evening
                with discovery, foster a love for learning, and watch as they
                explore the wonders of science, technology, engineering, and
                math. Start their morning off right—with a daily dose of wonder!
              </p>
            </div> */}
            <div className="lg:row-span-3 col-span-1 flex items-center justify-center pl-8 pt-5 lg:p-0 relative">
              <div className="bg-[#FF5F6D] p-12 text-center rounded-tl-[60px] rounded-bl-[60px] transform transition-transform duration-300 hover:translate-y-[-5px] hover:z-10">
                <h3 className="text-white font-montserratBold text-2xl text-start md:w-80">
                  Early Exposure & Cognitive Development
                </h3>
                <p className="text-white font-montserratBold md:text-2xl text-base">
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
