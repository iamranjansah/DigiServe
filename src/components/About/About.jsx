import { FaUsers, FaAward, FaProjectDiagram } from 'react-icons/fa';
import Stats from './Stats';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary">About Us</h2>
          <p className="py-6">Transforming businesses through digital innovation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              We're dedicated to helping businesses thrive in the digital age through innovative solutions
              and cutting-edge technology. Our team of experts works tirelessly to deliver exceptional
              results that drive growth and success.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>✓ Expert team of developers and marketers</li>
              <li>✓ Customized solutions for your business</li>
              <li>✓ Proven track record of success</li>
              <li>✓ Cutting-edge technology and tools</li>
            </ul>
          </div>
        </div>

        <Stats />
      </div>
    </div>
  );
};

export default About;