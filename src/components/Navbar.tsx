
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { SHOP_NAME, NAV_LINKS } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-0' : 'py-6'
      }`}
      aria-label="Primary Navigation"
    >
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${scrolled ? 'px-0' : 'px-6'}`}>
        <div className={`relative flex items-center justify-between transition-all duration-500 px-6 py-3.5 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 rounded-none' 
            : 'bg-transparent rounded-[1.8rem]'
        }`}>
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-indigo-200">
              <ShoppingBag className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-black tracking-tight transition-colors ${
              scrolled ? 'text-slate-900' : 'text-indigo-600'
            }`}>
              {SHOP_NAME}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-indigo-600 ${
                  scrolled ? 'text-slate-500' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-100"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2.5 rounded-xl transition-colors ${
              scrolled ? 'text-slate-800' : 'text-indigo-600'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-black text-slate-700 hover:text-indigo-600 px-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="w-full py-4 bg-indigo-600 text-white rounded-2xl text-center font-black uppercase tracking-widest text-sm shadow-lg shadow-indigo-200 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Visit Shop
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
