import { Link, useLocation } from 'react-router-dom';
import { logo } from '../../assets';
import { useState } from 'react';
import { NavbarItem } from '../../Constants/Navbar';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  return (
    // <div className="flex justify-between items-center  p-4  sticky top-0 z-50 bg-[#FFE4B5]">
    //   <Link to="/">
    //     <img src={logo} alt="Logo" className="md:w-64  w-48" />
    //   </Link>
    //   <div className="hidden lg:flex space-x-12 items-center">
    //     {NavbarItem?.map((v, index: number) => (
    //       <p
    //         key={index}
    //         onClick={() => setActive(v.href)}
    //         className={`font-montserratBold text-2xl cursor-pointer ${
    //           active === v.href ? 'text-[#35C5C0]' : 'text-[#000000]'
    //         }`}
    //       >
    //         <Link to={`${v.href}`}>{v.title}</Link>
    //       </p>
    //     ))}
    //   </div>
    //   <div className="lg:hidden">
    //     <button
    //       onClick={() => setMenuOpen(!menuOpen)}
    //       className="text-black focus:outline-none"
    //     >
    //       <svg
    //         className="w-6 h-6"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M4 6h16M4 12h16M4 18h16"
    //         ></path>
    //       </svg>
    //     </button>
    //   </div>

    //   {menuOpen && (
    //     <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
    //       <div className="absolute h-full left-0 w-64 bg-[#FFE4B5]  shadow-md">
    //         <div className="flex justify-between p-4 border-b-2 border-[#FF5F6D]">
    //           <Link to="/">
    //             <img src={logo} alt="Logo" className="w-32" />
    //           </Link>
    //           <button
    //             onClick={() => setMenuOpen(false)}
    //             className="text-black focus:outline-none"
    //           >
    //             <svg
    //               className="w-4 h-4"
    //               fill="#000000"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //         <div className="flex flex-col justify-start items-center space-y-4 py-4">
    //           {NavbarItem?.map((v, index: number) => (
    //             <p
    //               key={index}
    //               onClick={() => setActive(v.href)}
    //               className={`font-montserratBold text-base uppercase cursor-pointer ${
    //                 active === v.href ? 'text-[#35C5C0]' : 'text-[#000000]'
    //               }`}
    //             >
    //               <Link to={`${v.href}`}>{v.title}</Link>
    //             </p>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <>
      <div className="sticky top-0  z-20 bg-[#FFE4B5]">
        <div className="flex justify-between items-center md:p-6 p-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="md:w-64 w-48" />
          </Link>
          <div className="hidden lg:flex space-x-12 items-center">
            {NavbarItem?.map((v, index) => (
              <p
                key={index}
                onClick={() => setActive(v.href)}
                className={`font-montserratBold text-2xl uppercase cursor-pointer ${
                  active === v.href ? 'text-[#35C5C0]' : 'text-[#000000]'
                }`}
              >
                <Link to={`${v.href}`}>{v.title}</Link>
              </p>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute h-full left-0 w-64 bg-[#FFE4B5] shadow-md">
            <div className="flex justify-between p-4 border-b-2 border-[#FF5F6D]">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-32" />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-black focus:outline-none"
              >
                <svg
                  className="w-4 h-4"
                  fill="#000000"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-start items-center space-y-4 py-4">
              {NavbarItem?.map((v, index) => (
                <p
                  key={index}
                  onClick={() => setActive(v.href)}
                  className={`font-montserratBold text-base uppercase cursor-pointer ${
                    active === v.href ? 'text-[#35C5C0]' : 'text-[#000000]'
                  }`}
                >
                  <Link to={`${v.href}`}>{v.title}</Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
