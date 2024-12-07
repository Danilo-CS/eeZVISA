import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Your Visa Journey
              <span className="text-blue-500"> Made Simple</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Navigate your visa application process with ease using our streamlined platform.
            </p>
            <div className="space-y-4">
              {[
                'Expert guidance at every step',
                'Fast-track application process',
                'Real-time status updates'
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2 justify-center md:justify-start">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-500 text-white px-6 py-2.5 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors w-full sm:w-auto">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-colors w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?auto=format&fit=crop&w=800&q=80"
              alt="Visa Application Process"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}