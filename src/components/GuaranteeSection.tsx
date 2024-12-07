import React from 'react';
import { Shield, Clock, CheckCircle } from 'lucide-react';

export function GuaranteeSection() {
  const guarantees = [
    {
      icon: <Shield className="w-16 h-16 text-[#CD2026]" />,
      title: "APPLICATION LIFETIME GUARANTEE",
      description: "100% accurate application preparation, expert support, and maximum success rate. Backed throughout your entire immigration journey.",
      subtitle: "Your application, backed for life™"
    },
    {
      icon: <Clock className="w-16 h-16 text-[#CD2026]" />,
      title: "EXPEDITED PROCESSING",
      description: "EASYVIZI finds every opportunity to expedite your application and maximize your chances of approval.",
      subtitle: "Faster processing times"
    },
    {
      icon: <CheckCircle className="w-16 h-16 text-[#CD2026]" />,
      title: "100% ACCURATE SUBMISSIONS",
      description: "Our applications are 100% accurate and compliant with all USCIS requirements, guaranteed, or we'll pay any government penalties.",
      subtitle: "Applications done right"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get your visa done much faster and cheaper with{' '}
            <span className="text-[#003875]">EASY</span>
            <span className="text-[#CD2026]">VIZI</span>
            {' '}—
            <span className="text-[#003875] underline decoration-[#CD2026] decoration-4 underline-offset-4">
              guaranteed
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#003875] rounded-full opacity-0 group-hover:opacity-10 transform scale-150 transition-all duration-300"></div>
                <div className="relative bg-white p-6 rounded-full shadow-lg border-2 border-gray-100">
                  {guarantee.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003875] mb-2">
                {guarantee.title}
              </h3>
              <h4 className="text-lg font-medium text-gray-700 mb-4">
                {guarantee.subtitle}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#003875] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#002855] transition-colors transform hover:scale-105 duration-200 shadow-lg">
            Start Your Application Now
          </button>
        </div>
      </div>
    </section>
  );
}