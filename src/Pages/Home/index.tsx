import { heroBg } from '../../assets';
import Curiousityblock from '../../Components/Curiousityblock';
import WorkingBlock from '../../Components/working';
import EducationSystem from '../../Components/EductionSystem';
import ImpactEducation from '../../Components/ImpactEducation';
import FAQS from '../../Components/Faqs';
import FunFact from '../../Components/FunFacts';
import Blogs from '../../Components/Blogs';
import SignBlock from '../../Components/SignBlock';
import ButtonUI from '../../Common/Button';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#FFE4B5] ">
        <Navbar />
        <div className=" relative h-auto lg:h-[650px]">
          <div className="md:p-8 p-4">
            <p className="font-montserrat font-bold md:text-4xl text-2xl">
              START YOUR CHILD’S{' '}
            </p>
            <p className="font-montserrat font-bold md:text-4xl text-2xl">
              MORNING WITH
            </p>
            <p className="font-montserrat font-bold md:text-4xl text-2xl">WONDER</p>
            {/* <p className="font-montserratBold md:text-4xl text-2xl uppercase ">START YOUR CHILD’S MORNING WITH WONDER</p> */}
          </div>
          <div className="bg-[#FF5F6D] md:p-8 p-4 lg:w-4/5 rounded-tr-[60px] rounded-br-[60px]  w-3/5 md:block flex justify-between ">
            <div className="">
              <p className="font-montserrat  font-bold md:text-6xl text-2xl text-white">
                DAILY STEM{' '}
              </p>
              <p className="font-montserrat  font-bold md:text-6xl text-2xl text-white">
                ADVENTURES{' '}
              </p>
              <p className="font-montserrat  font-bold md:text-6xl text-2xl text-white">
                FOR KIDS
              </p>
            </div>
            {/* <div className="md:hidden block">
              <ButtonUI text="SIGN UP" className="ml-2 py-1 px-1" />
            </div> */}
          </div>
          <div className="">
            <ButtonUI
              text="SIGN UP"
              className="ml-8 py-3"
              onClick={() => navigate('/register')}
            />
          </div>
          <img
            src={heroBg}
            className="lg:absolute lg:top-0 lg:right-0 w-full h-full object-cover lg:w-[800px] 1320:w-[1000px] 1320:h-[650px] xl:w-[900px]  bottom-0"
          />
        </div>
      </div>
      <Curiousityblock />
      <WorkingBlock />
      <EducationSystem />
      <ImpactEducation />
      <FAQS />
      <FunFact />
      <Blogs />
      <SignBlock />
      <Footer />
    </>
  );
}

export default Home;
