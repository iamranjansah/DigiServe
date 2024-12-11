import { FaCheck } from 'react-icons/fa';
import { pricingData } from './pricingData';

const Pricing = () => {
  return (
    <div name="pricing" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-24">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-gray-400">Choose the perfect plan for your business needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={`bg-gray-900 rounded-lg p-8 ${
                plan.popular ? 'transform scale-105 border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <p className="text-gray-400 mt-2">{plan.description}</p>
              <div className="my-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="text-primary mr-2" />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;