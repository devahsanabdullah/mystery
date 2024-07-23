import { Link } from 'react-router-dom';
import signImage from '../../assets/signImage.png';
import { Formik, Field } from 'formik';
import {
  initalValueRegister,
  userSchema,
} from '../../Constants/ValidationValue';
import Navbar from '../../Components/Navbar';

const Register = () => {
  return (
    <div>
      <div className="bg-[#FFE4B5] min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto flex-grow">
          <h1 className="text-[#62A0E3] text-6xl font-bold flex justify-center mt-8">
            Register
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            {/* Left Column */}
            <div className="flex justify-center items-center">
              <img
                src={signImage}
                alt="Sign Up"
                className="md:mt-20 mt-5 w-3/4 md:w-full hidden md:block"
              />
            </div>

            {/* Right Column */}
            <Formik
              initialValues={initalValueRegister}
              validationSchema={userSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <form className="flex flex-col justify-center">
                  <div className="md:mt-20 mt-5">
                    <div className="mt-2.5 md:px-0 px-4">
                      <Field
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-firstName"
                        placeholder="Your Name"
                        className="block w-full border-l-4 border-[#62A0E3] px-3.5 py-2 outline-none placeholder:font-montserratBold placeholder:text-[#35C5C0]"
                      />
                      {touched.firstName && errors.firstName && (
                        <div className="text-red-600">{errors.firstName}</div>
                      )}
                    </div>

                    <div className="mt-2.5 md:px-0 px-4">
                      <Field
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="given-lastName"
                        placeholder="Last Name"
                        className="block w-full border-l-4 border-[#62A0E3] px-3.5 py-2 outline-none placeholder:font-montserratBold placeholder:text-[#35C5C0]"
                      />
                      {touched.lastName && errors.lastName && (
                        <div className="text-red-600">{errors.lastName}</div>
                      )}
                    </div>

                    <div className="mt-2.5 md:px-0 px-4">
                      <Field
                        id="userName"
                        name="userName"
                        type="text"
                        autoComplete="given-userName"
                        placeholder="UserName"
                        className="block w-full border-l-4 border-[#62A0E3] px-3.5 py-2 outline-none placeholder:font-montserratBold placeholder:text-[#35C5C0]"
                      />
                      {touched.userName && errors.userName && (
                        <div className="text-red-600">{errors.userName}</div>
                      )}
                    </div>

                    <div className="mt-2.5 md:px-0 px-4">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="given-email"
                        placeholder="Your email"
                        className="block w-full border-l-4 border-[#62A0E3] px-3.5 py-2 outline-none placeholder:font-montserratBold placeholder:text-[#35C5C0]"
                      />
                      {touched.email && errors.email && (
                        <div className="text-red-600">{errors.email}</div>
                      )}
                    </div>

                    <div className="mt-2.5 md:px-0 px-4">
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

                    <div className="mt-2.5 md:px-0 px-4">
                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="given-confirmPassword"
                        placeholder="Confirm password"
                        className="block w-full border-l-4 border-[#62A0E3] px-3.5 py-2 outline-none placeholder:font-montserratBold placeholder:text-[#35C5C0]"
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <div className="text-red-600">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>

                    <div className="mt-2.5 md:px-0 px-4">
                      <Field
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="given-phone"
                        placeholder="Phone number"
                        className="block w-full border-l-4 border-[#62A0E3] px-3.5 py-2 outline-none placeholder:font-montserratBold placeholder:text-[#35C5C0]"
                      />
                      {touched.phone && errors.phone && (
                        <div className="text-red-600">{errors.phone}</div>
                      )}
                    </div>

                    <div className="flex items-center mt-4 mb-4 md:px-0 px-4">
                      <Field
                        id="default-checkbox"
                        type="checkbox"
                        className="w-5 h-5 text-blue-600 font-montserrat"
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm font-medium font-montserrat"
                      >
                        I accept{' '}
                        <Link to="/register" className="text-[#0080FF]">
                          Terms and Service
                        </Link>{' '}
                        &{' '}
                        <Link to="/register" className="text-[#0080FF]">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <div className="text-center md:text-left">
                      <button
                        type="submit"
                        className="bg-[#F27253] text-white p-4 w-full md:w-3/4 rounded-full font-bold font-montserratBold text-3xl uppercase"
                      >
                        Register
                      </button>

                      <div className="my-4">
                        <p className="font-bold text-2xl">
                          Do you already have an account?{' '}
                        </p>
                        <Link
                          to="/login"
                          className="text-[#62A0E3] font-montserratBold font-bold"
                        >
                          Login
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
    </div>
  );
};

export default Register;
