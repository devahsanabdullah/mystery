import logo from '../../assets/logo.png';
 import fb from '../../assets/fb.png';
import x from '../../assets/x.png';
import instgram from '../../assets/instgram.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div>
        <div className="bg-[#FFE4B5]">
          <div className="container mx-auto py-8">
            <div className="flex md:justify-between flex-wrap justify-center  items-center">
              <div>
                <img src={logo} alt="logo" className="w-64 h-24" />
              </div>

              <div className="flex gap-2 items-center">
                <div>
                  {/* <img src={social} alt="logo" className="w-40" /> */}
                  <h1 className='text-[#35C5C0] font-montserratBold text-xl'>Get social</h1>
                </div>
                <div>
                  <Link to="/">
                    <img src={fb} alt="logo" className="md:w-12 w-11 " />
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <img src={x} alt="logo" className="md:w-12 w-11" />
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <img src={instgram} alt="logo" className="md:w-12 w-11" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
