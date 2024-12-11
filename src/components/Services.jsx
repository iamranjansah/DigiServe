import { FaCode, FaMobile, FaSearchDollar, FaBullhorn } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode size={50} />,
      title: "Web Development",
      description: "Custom websites built with the latest technologies to help your business stand out.",
    },
    {
      id: 2,
      icon: <FaMobile size={50} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      id: 3,
      icon: <FaSearchDollar size={50} />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic.",
    },
    {
      id: 4,
      icon: <FaBullhorn size={50} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
    },
  ];

  return (
    <div name="services" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary">Services</h2>
          <p className="py-6">Check out our services that help businesses grow</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {services.map(({ id, icon, title, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-500">
              <div className="flex justify-center text-primary mb-4">{icon}</div>
              <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
              <p className="text-center text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;