import React from 'react';
import { FileText, Clock, Smartphone, Search } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: "File Online",
      description: "Complete your visa application with our easy-to-use online platform",
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
      link: "#file-online"
    },
    {
      title: "Manage Your Case",
      description: "Track your application status and receive real-time updates",
      icon: <Smartphone className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=600&q=80",
      link: "#manage-case"
    }
  ];

  const features = [
    "Check your case status",
    "View processing times",
    "Update your information",
    "Receive notifications",
    "Access support resources",
    "Schedule appointments"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Streamlined Visa Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive suite of visa application tools and services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-md w-full h-48 object-cover mb-6"
                />
                <div className="space-y-3">
                  {features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Search className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={service.link}
                  className="mt-8 inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium"
                >
                  <span>Learn more</span>
                  <Clock className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}