import { Link } from 'react-router-dom';
import loginImage from '../../assets/login.png';
import { Formik, Field } from 'formik';
import { initalValuelogin, loginSchema } from '../../Constants/ValidationValue';
import Navbar from '../../Components/Navbar';

const Login = () => {
  return (
    <div className="bg-[#FFE4B5] min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto flex-grow flex flex-col justify-center">
        <h1 className="text-[#62A0E3] text-6xl font-bold flex justify-center mt-8">
          Welcome back
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 mt-8">
          {/* Left Column */}
          <div className="flex justify-center items-center">
            <img
              src={loginImage}
              alt="Login"
              className="md:mt-20 mt-5 w-3/4 md:w-full hidden md:block"
            />
          </div>

          {/* Right Column */}
          <Formik
            initialValues={initalValuelogin}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <form className="flex flex-col justify-center">
                <div className="md:mt-20 mt-5 px-4 md:px-0">
                  <h2 className="font-montserratBold font-bold text-4xl mb-8">
                    Login to your account
                  </h2>
                  <div className="mb-4">
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="given-email"
                      placeholder="Your email"
                      className="block w-full border-l-4 border-[#62A0E3] px-3.5 py-2 outline-none placeholder:font-montserratBold placeholder:text-[#35C5C0]"
                    />
                    {touched.email && errors.email && (
                      <div className="text-red-600">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-6">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="given-password"
                      placeholder="Password"
                      className="block w-full border-l-4 border-[#62A0E3] px-3.5 py-2 outline-none placeholder:font-montserratBold placeholder:text-[#35C5C0]"
                    />
                    {touched.password && errors.password && (
                      <div className="text-red-600">{errors.password}</div>
                    )}
                  </div>
                  <div className="flex items-center mb-6">
                    <Field
                      id="default-checkbox"
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 font-montserrat"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium font-montserrat"
                    >
                      Keep me logged in
                    </label>
                  </div>
                  <div className="text-center md:text-left">
                    <button
                      type="submit"
                      className="bg-[#F27253] text-white p-4 w-full md:w-3/4 rounded-full font-bold font-montserratBold text-3xl uppercase mb-6"
                    >
                      Log in
                    </button>
                    <div className="text-center">
                      <p className="font-bold text-2xl mb-2">
                        Don't have an account?
                      </p>
                      <Link
                        to="/register"
                        className="text-[#62A0E3] font-montserratBold font-bold"
                      >
                        Create one
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
