import React from 'react';
import { Users, Award, Globe, Shield, Target, Sparkles, CheckCircle, Cpu, HeadphonesIcon, Users2 } from 'lucide-react';

export function AboutUsPage() {
  const stats = [
    { number: "500K+", label: "Successful Applications" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Expert Support" },
    { number: "150+", label: "Countries Served" }
  ];

  const offerings = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Affordable Expertise",
      description: "Access professional guidance at a fraction of traditional legal costs with transparent, fixed-price service models."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Utilize cutting-edge artificial intelligence for real-time document verification, eligibility assessment, and instant updates."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Comprehensive Support",
      description: "From USCIS applications to Embassy processing and NVC consultations, we provide end-to-end digital support."
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Navigate with ease using our intuitive platform featuring personalized recommendations and secure document management."
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Approachable",
      description: "We make complex immigration processes simple and understandable for everyone."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professional",
      description: "Our expert team maintains the highest standards of service and confidentiality."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovative",
      description: "We continuously evolve our technology to improve your application experience."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Inclusive",
      description: "Supporting diverse communities worldwide with multilingual assistance."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to EasyVizi
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Where your immigration journey is simplified. We're a pioneering digital platform that demystifies the complexities of immigration paperwork, making visa applications accessible, affordable, and straightforward.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We are committed to empowering individuals worldwide by providing a clear path through the intricate maze of immigration applications. Our goal is to democratize professional visa assistance, making it available to everyone, regardless of their budget.
            </p>
            <div className="space-y-4">
              {[
                'Simplify complex immigration processes',
                'Make professional guidance affordable',
                'Provide innovative digital solutions',
                'Support global mobility dreams'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80"
              alt="Global Community"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your immigration needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="text-blue-500 mb-4">{offering.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">The principles that guide everything we do</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="text-blue-500 mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Community</h2>
            <p className="text-xl text-gray-600">
              We proudly serve a diverse global community, including international students, working professionals, family visa applicants, and immigrants seeking new opportunities in the U.S. Our inclusive approach ensures that no one is left behind in their journey towards their immigration goals.
            </p>
            <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}