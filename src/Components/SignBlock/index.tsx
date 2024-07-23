import { useNavigate } from 'react-router-dom';
import signImage from '../../assets/signImage.png';
import ButtonUI from '../../Common/Button';
const SignBlock = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[#F27253]">
        <div className="container mx-auto">
          <h1 className="text-white font-montserratBold md:text-6xl max-w-lg text-4xl md:px-0 px-4 text-center md:text-left  md:py-16 py-8">
            Sign up for the latest deals & drops!
          </h1>

          <div className="grid lg:grid-cols-10 grid-cols-3 gap-32">
            <div className="lg:col-span-4 cols-span-12 lg:block hidden ">
              <img src={signImage} alt="images" />
            </div>
            <div className="md:col-span-5 col-span-3">
              <p className="font-montserratBold text-white md:px-0 px-4  md:text-center text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique erat tellus, vel tempor diam dignissim vel. Cras elit
                eros, consequat ac lorem pellentesque, vestibulum dictum ante.
                Duis et massa lobortis, efficitur massa in, feugiat magna. Ut in
                felis vestibulum, sagittis mauris non, tristique tellus. In at
                porta purus,
              </p>
              <div className="text-center md:text-left md:pb-0 pb-16">
                <ButtonUI
                  text="SIGN UP"
                  className="ml-0 py-3"
                  onClick={() => navigate('/register')}
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden  ">
              <img src={signImage} alt="images" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignBlock;
