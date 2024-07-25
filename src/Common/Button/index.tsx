
const ButtonUI = ({ text, className , onClick }: any) => {
  return (
    <div>
      <button
        className={`${`bg-[#62A0E3] mt-8  rounded-full text-white font-montserratBold md:text-2xl text-lg px-6 `} ${className}` }  onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonUI;
