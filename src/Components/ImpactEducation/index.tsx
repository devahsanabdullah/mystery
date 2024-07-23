import impact from '../../assets/impact.png';
const ImpactEducation = () => {
  return (
    <div>
      <div className="bg-[#35C5C0] ">
        <div className="grid lg:grid-rows-3 lg:grid-flow-col pt-16">
          <div className="lg:row-span-3 lg:pl-12  pl-8">
            <h1 className="lg:text-6xl font-bold text-white  md:w-[27rem]  text-4xl ">
              Impact of STEM Education Early
            </h1>
          </div>
          <div className="lg:row-span-3 col-span-1 flex items-center justify-center pl-8 pt-5  lg:p-0">
            <div className="bg-[#FF5F6D] p-12 text-center rounded-tl-[60px] rounded-bl-[60px] hover:scale-105 transform transition-all duration-300 hover:z-10">
              <h3 className="text-white font-montserratBold text-2xl text-start md:w-80">
                Early Exposure & Cognitive Development
              </h3>
              <p className="text-white font-montserratBold text-start mt-4">
                A study in Science magazine suggests a strong foundation in math
                skills by kindergarten is linked to better performance in later
                math by up to 35% and even reading comprehension
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 md:pt-10">
          <div className="lg:row-span-3 lg:col-span-1 flex items-center justify-center pl-8 pt-5  lg:p-0  ">
            <div className="bg-[#FF5F6D] p-12 text-center rounded-tr-[60px] rounded-br-[60px] lg:block hidden hover:scale-105 transform transition-all duration-300 hover:z-10">
              <h3 className="text-white font-montserratBold text-2xl text-start w-80">
                21st Century Skills
              </h3>
              <p className="text-white font-montserratBold text-start mt-4">
                The National Academies of Sciences, Engineering, and Medicine
                highlights the importance of collaboration in STEM fields. Early
                exposure to STEM activities can foster these skills. Studies
                show that well-designed collaborative learning environments can
                increase student learning outcomes by up to 50%.
              </p>
            </div>
          </div>
          <div className="row-span-3 lg:pl-12 pl-4 ">
            <h1 className="md:text-6xl font-bold text-white lg:w-[27rem]  text-4xl">
              Curiosity & Engagement
            </h1>
            <p className="text-white font-montserratBold text-start lg:pt-12 pt-8  lg:w-[28rem]">
              A study in Science magazine suggests a strong foundation in math
              skills by kindergarten is linked to better performance in later
              math and even reading comprehension
            </p>
            <div>
              <img src={impact} className='hidden lg:block' />
            </div>
          </div>

          <div className="lg:row-span-3 lg:col-span-1 flex items-center justify-center  pr-8 mt-5 md:p-0  ">
            <div className="bg-[#FF5F6D] p-6 md:p-12 text-center rounded-tr-[60px] rounded-br-[60px] block lg:hidden hover:scale-105 transform transition-all duration-300 hover:z-10">
              <h3 className="text-white font-montserratBold text-2xl text-start md:w-80">
                21st Century Skills
              </h3>
              <p className="text-white font-montserratBold text-start mt-4">
                The National Academies of Sciences, Engineering, and Medicine
                highlights the importance of collaboration in STEM fields. Early
                exposure to STEM activities can foster these skills. Studies
                show that well-designed collaborative learning environments can
                increase student learning outcomes by up to 50%.
              </p>
            </div>
          </div>

          <img src={impact} className='flex justify-end items-end w-full lg:hidden ' />
        </div>
      </div>
    </div>
  );
};

export default ImpactEducation;
