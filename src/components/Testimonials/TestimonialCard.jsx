import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ name, position, company, content, image }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg relative">
      <FaQuoteLeft className="text-primary text-4xl mb-4" />
      <p className="text-gray-400 mb-4">{content}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">
            {position} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;