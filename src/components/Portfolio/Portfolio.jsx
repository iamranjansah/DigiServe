import PortfolioItem from './PortfolioItem';
import { portfolioData } from './portfolioData';

const Portfolio = () => {
  return (
    <div name="portfolio" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary">Portfolio</h2>
          <p className="py-6">Check out some of our recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <PortfolioItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;