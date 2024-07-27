import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div>
      <div className="bg-[#FFE4B5]">
        <div className="container mx-auto md:pt-20 pt-10 px-4 lg:px-0">
          <div className="">
            <h1 className="text-6xl   font-montserratExtrabold text-[#F27253]">
              Blog
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pt-16">
            <div className="col-span-1">
              <div className="bg-[#35C5C0] h-[35rem] rounded-tl-[88px] rounded-tr-[88px] relative hover:scale-105 transform transition-all duration-300 hover:z-10">
                <div className="bg-[#F27253] w-11/12 h-auto p-8 absolute right-0 md:bottom-24 bottom-20 rounded-tl-[40px]  rounded-bl-[40px]">
                  <h3 className="font-montserratBold text-white text-4xl md:text-3xl lg:text-4xl ">
                    STEM Education And Your Child’s Future
                  </h3>
                </div>

                <Link
                  to="/"
                  className="absolute bottom-24  pt-7 font-montserratBold text-white text-base right-12"
                >
                  Read
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-[#FFA61D] h-[35rem] rounded-tl-[88px] rounded-tr-[88px] relative hover:scale-105 transform transition-all duration-300 hover:z-10">
                <div className="bg-[#62A0E3] w-11/12 h-auto p-8 absolute right-0 md:bottom-24 bottom-20 rounded-tl-[40px]  rounded-bl-[40px]">
                  <h3 className="font-montserratBold text-white text-4xl md:text-3xl lg:text-4xl ">
                    STEM Education And Your Child’s Future
                  </h3>
                </div>

                <Link
                  to="/"
                  className="absolute bottom-24  pt-7 font-montserratBold text-white text-base right-12"
                >
                  Read
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-[#FF7799] h-[35rem] rounded-tl-[88px] rounded-tr-[88px] relative hover:scale-105 transform transition-all duration-300 hover:z-10">
                <div className="bg-[#FFA720] w-11/12 h-auto p-8 absolute right-0 md:bottom-24 bottom-20 rounded-tl-[40px]  rounded-bl-[40px]">
                  <h3 className="font-montserratBold text-white text-4xl md:text-3xl lg:text-4xl">
                    STEM Education And Your Child’s Future
                  </h3>
                </div>

                <Link
                  to="/"
                  className="absolute bottom-24  pt-7 font-montserratBold text-white text-base right-12"
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
