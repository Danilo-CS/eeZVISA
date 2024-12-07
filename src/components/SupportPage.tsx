import React from 'react';
import { MessageCircle, Phone, Mail, Globe, Clock, FileText, HelpCircle, Video, BookOpen, Search } from 'lucide-react';

export function SupportPage() {
  const contactChannels = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant help from our visa experts",
      availability: "24/7 Support",
      action: "Start Chat",
      href: "#chat"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      availability: "Mon-Fri, 9AM-6PM",
      action: "Call Now",
      href: "#call"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us your detailed inquiries",
      availability: "Response within 24h",
      action: "Send Email",
      href: "#email"
    }
  ];

  const resourceCategories = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation",
      items: ["Visa Requirements", "Application Guides", "Country Specific Info"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Tutorials",
      items: ["Application Process", "Document Upload", "Interview Tips"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Knowledge Base",
      items: ["Common Questions", "Best Practices", "Success Stories"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you today?
          </h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Contact Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactChannels.map((channel, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-500">
                  {channel.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{channel.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {channel.availability}
                  </div>
                  <a
                    href={channel.href}
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                  >
                    {channel.action}
                    <Globe className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Self-Service Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-500">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                      >
                        <HelpCircle className="w-4 h-4 mr-2" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Check our detailed FAQ section or contact our support team
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            View FAQ
          </button>
        </div>
      </div>
    </div>
  );
}