import { useState } from 'react';
import { faqData } from './faqData';
import FAQItem from './FAQItem';

const FAQ = () => {
  return (
    <div name="faq" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-24">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Find answers to common questions about our services</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq) => (
            <FAQItem key={faq.id} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;