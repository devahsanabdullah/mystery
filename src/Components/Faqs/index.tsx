import { useState } from 'react';
import faqs from '../../assets/Faqs.png';
import { sections } from '../../Constants';
const FAQS = () => {
  const [openSections, setOpenSections] = useState<number[]>(
    sections.map((_, index) => index)
  );
  const toggleSection = (index: number) => {
    setOpenSections((prev: any) =>
      prev.includes(index)
        ? prev.filter((i: number) => i !== index)
        : [...prev, index]
    );
  };
  return (
    <div className="bg-[#F27253]">
      <div className="container mx-auto md:py-20 py-10 px-4 lg:px-0">
        <div className="grid md:grid-cols-12 grid-cols-6 md:gap-16 gap-8">
          {/* */}
          <div className="md:col-span-5  col-span-6">
          
            <h1 className="text-6xl font-montserratExtrabold md:block hidden text-white">FAQ’s</h1>
            <img src={faqs} alt="faqs" className="md:w-96  w-40  md:mt-10  mt-5 md:block hidden"  />
            <div className=' md:hidden  flex justify-between items-center w-full'>
            <h1 className="text-6xl font-montserratExtrabold text-white">FAQ’s</h1>
            <img src={faqs} alt="faqs" className="w-28"  />
            </div>
          </div>

          <div className="md:col-span-7   col-span-6">
            {sections.map((section, index: number) => {
              const { title, description } = section;
              return (
                <div
                  key={index}
                  className={`mb-5 ${index === sections.length - 1 ? '' : 'border-b-4'}`}

                >
                  <div
                    className="flex items-center space-x-2 py-4 cursor-pointer"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center justify-center w-10 h-10 border border-white text-white rounded-full flex-shrink-0">
                      <span className="text-2xl font-bold">
                        {openSections.includes(index) ? '-' : '+'}
                      </span>
                    </div>
                    <h1 className="text-white font-montserratExtrabold md:text-4xl text-2xl">
                      {title}
                    </h1>
                  </div>
                  {openSections.includes(index) && (
                    <p className="text-white text-base font-montserratBold mt-4 mb-4 pl-12">
                      {description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
