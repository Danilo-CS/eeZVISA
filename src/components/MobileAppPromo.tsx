import React from 'react';
import { Smartphone, ArrowDown, Shield } from 'lucide-react';

export function MobileAppPromo() {
  return (
    <section className="bg-gradient-to-br from-[#003875] to-[#002855] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-center space-x-4">
              <Smartphone className="w-12 h-12 text-[#CD2026]" />
              <h2 className="text-3xl font-bold">
                File faster and easier with the free EASYVIZI app
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-[#CD2026]" />
                <p className="text-lg">Secure document scanning and upload</p>
              </div>
              <div className="flex items-center space-x-3">
                <ArrowDown className="w-6 h-6 text-[#CD2026]" />
                <p className="text-lg">Track your application status on the go</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                     alt="Download on the App Store" 
                     className="h-8" />
              </a>
              <a href="#" className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                     alt="Get it on Google Play" 
                     className="h-8" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#003875] to-transparent md:hidden"></div>
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80"
                alt="EASYVIZI Mobile App"
                className="rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}