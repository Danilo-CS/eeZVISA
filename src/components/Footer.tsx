import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const links = {
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Resources', href: '#' }
    ],
    services: [
      { label: 'Visa Types', href: '#' },
      { label: 'Application Process', href: '#' },
      { label: 'Track Application', href: '#' },
      { label: 'Success Stories', href: '#' }
    ]
  };

  const socialIcons = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Youtube className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { icon: <Mail className="w-5 h-5" />, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">
                <span className="text-blue-500">EASY</span>
                <span className="text-gray-900">VISA</span>
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Simplifying your visa application process with professional guidance and support.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} EASYVISA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}