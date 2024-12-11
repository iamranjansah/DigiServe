import { processData } from './processData';

const Process = () => {
  return (
    <div name="process" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-24">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400">How we bring your vision to life</p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2" />

          {processData.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 relative">
                <div className="bg-gray-900 p-8 rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="absolute -left-3 md:left-auto md:right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full" />
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Step {step.id}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg shadow-lg max-w-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;