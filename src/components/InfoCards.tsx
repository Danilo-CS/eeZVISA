import React from 'react';
import { FileCheck, Clock, Shield, HeadphonesIcon } from 'lucide-react';

export function InfoCards() {
  const cards = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Visa Expertise",
      description: "Professional guidance for all visa categories"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Expedited application handling and processing"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Process",
      description: "Your information is protected with bank-level security"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for your queries"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-blue-500 mb-4">{card.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
}