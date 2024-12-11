const PortfolioItem = ({ image, title, description, link }) => {
  return (
    <div className="shadow-md shadow-gray-600 rounded-lg overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary transition-colors"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;