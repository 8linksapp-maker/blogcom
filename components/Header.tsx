import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Search } from 'lucide-react';
import { getAllCategories } from '../data';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const categories = getAllCategories();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-semibold" : "text-gray-600 hover:text-primary";
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">TechVision</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            {categories.map(cat => (
              <Link 
                key={cat} 
                to={`/category/${cat.toLowerCase()}`}
                className={isActive(`/category/${cat.toLowerCase()}`)}
              >
                {cat}
              </Link>
            ))}
          </nav>

          {/* Right Section (Search/Social) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
              Newsletter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-4 pt-2 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {categories.map(cat => (
              <Link 
                key={cat} 
                to={`/category/${cat.toLowerCase()}`}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link to="/" className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg font-medium">
                Assinar Newsletter
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};