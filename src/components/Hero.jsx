import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Digital Solutions for Your Business
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            We provide cutting-edge digital marketing services to help your business grow. 
            From web development to app creation, we've got you covered.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-primary to-secondary cursor-pointer">
              Get Started
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={16} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;