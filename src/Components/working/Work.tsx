
import workingImg from '../../assets/workinImg.png';

const Work = () => {
  return (
    <div className="bg-[#35C5C0] pt-12 px-11">
      <div className="container mx-auto pt-14 px-4 lg:px-0">
        <div className="flex text-center items-center justify-center pb-14">
          <h2 className="text-white font-montserratBold md:text-6xl text-2xl">
            How It Works
          </h2>
        </div>
<div className='flex justify-items-end items-end'>
        <div className="flex flex-col md:flex-row justify-between items-end h-auto">
            <div className='relative h-3/5 text-white text-center p-8 m-4  w-full md:w-1/3  flex flex-col items-center justify-center'>
        <img src={workingImg} className="absolute -top-16 left-1/2 transform -translate-x-1/2 h-32 w-32" alt="Working" />
          <div className="relative bg-[#FF7799] py-5 rounded-tl-full rounded-tr-full">
            <h3 className="font-montserratBold text-4xl">1.</h3>
            <h4 className="font-montserratBold text-2xl">Easy Sign up</h4>
            <p className="mt-4 font-montserratBold p-4 text-lg ">Add links to papers, sites, or other resources related to your topic.</p>
            
          </div>
          </div>
          <div className="relative bg-[#FF7799]  text-white text-center p-8 m-4 w-full rounded-tl-full rounded-tr-full md:w-1/3 h-4/5 flex flex-col items-center justify-center">
            <h3 className="font-montserratBold text-4xl">2.</h3>
            <h4 className="font-montserratBold text-2xl">Daily Doses of Science</h4>
            <p className="font-montserratBold text-lg mt-4">Add links to papers, sites, or other resources related to your topic.</p>
          </div>
          <div className="relative bg-[#FF7799] text-white text-center p-8 m-4 rounded-tl-full rounded-tr-full  w-full md:w-1/3 h-full flex flex-col items-center justify-center">
            <h3 className="font-montserratBold text-4xl">3.</h3>
            <h4 className="font-montserratBold text-2xl">Springboard for Deeper Learning</h4>
            <p className="mt-4">Add links to papers, sites, or other resources related to your topic.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
