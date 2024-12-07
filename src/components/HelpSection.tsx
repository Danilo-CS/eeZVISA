import React from 'react';
import { BookOpen, Calendar, Video, FileCheck, Clock, HelpCircle } from 'lucide-react';

export function HelpSection() {
  const helpItems = [
    {
      icon: <FileCheck className="w-12 h-12 text-[#003875]" />,
      title: "Visa Requirements",
      description: "Stay informed about the latest visa requirements and documentation needed for your application.",
      action: "Check requirements",
      link: "#requirements"
    },
    {
      icon: <Calendar className="w-12 h-12 text-[#003875]" />,
      title: "Processing Times",
      description: "Know the current processing times and important deadlines for your visa category.",
      action: "View timeline",
      link: "#timeline"
    },
    {
      icon: <Video className="w-12 h-12 text-[#003875]" />,
      title: "Guides & Resources",
      description: "Access comprehensive guides, tutorials, and resources to help with your application process.",
      action: "Start learning",
      link: "#resources"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We're here to help, before and after you file for your visa or green card
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the support you need throughout your immigration journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {item.description}
              </p>
              <a
                href={item.link}
                className="inline-flex items-center text-[#003875] hover:text-[#CD2026] font-medium transition-colors"
              >
                {item.action}
                <HelpCircle className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#support"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#003875] text-[#003875] hover:bg-[#003875] hover:text-white rounded-lg font-medium transition-colors"
          >
            <Clock className="w-5 h-5 mr-2" />
            Get 24/7 Support
          </a>
        </div>
      </div>
    </section>
  );
}