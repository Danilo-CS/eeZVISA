import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Topics', href: '#', children: [] },
  { label: 'Forms', href: '#', children: [] },
  { label: 'Newsroom', href: '#', children: [] },
  { label: 'Citizenship', href: '#', children: [] },
  { label: 'Green Card', href: '#', children: [] },
  { label: 'Laws', href: '#', children: [] },
  { label: 'Tools', href: '#', children: [] },
];

export function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="inline-flex items-center px-4 py-2 text-[#003875] hover:text-[#CD2026] font-medium">
                  {item.label}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <button className="px-4 py-2 text-[#003875] hover:text-[#CD2026] font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}