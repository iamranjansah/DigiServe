import { FaUsers, FaAward, FaProjectDiagram } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-primary text-4xl mb-2" />,
      number: "200+",
      label: "Happy Clients"
    },
    {
      id: 2,
      icon: <FaProjectDiagram className="text-primary text-4xl mb-2" />,
      number: "500+",
      label: "Projects Completed"
    },
    {
      id: 3,
      icon: <FaAward className="text-primary text-4xl mb-2" />,
      number: "15+",
      label: "Years Experience"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center p-6 bg-gray-900 rounded-lg hover:scale-105 transition-transform">
          {stat.icon}
          <h4 className="text-3xl font-bold">{stat.number}</h4>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;