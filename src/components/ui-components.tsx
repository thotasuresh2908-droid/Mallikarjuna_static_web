import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, ChevronRight, ChevronLeft, ShoppingCart, Package, Gamepad2, UtensilsCrossed, Gift, Phone, MapPin, Mail, Menu, X, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP, SHOP_NAME } from '../constants';

export const Icon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (LucideIcons as any)[name] as LucideIcon;
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export const Section = ({ children, id, className, bgColor = "bg-slate-50" }: { children: React.ReactNode, id?: string, className?: string, bgColor?: string }) => (
  <section id={id} className={`py-12 md:py-16 px-4 md:px-8 ${bgColor} ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const SectionHeader = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);


export const SmartImage = ({ src, alt, className, ...props }: { src: string, alt: string, className?: string, [key: string]: any }) => (
  <img 
    src={src} 
    alt={alt} 
    className={className} 
    referrerPolicy="no-referrer" 
    loading="lazy"
    {...props}
  />
);

export const ProductCarousel = ({ products, onViewDetails }: { products: Product[], onViewDetails: (p: Product) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = products.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const text = encodeURIComponent(`Hi ${SHOP_NAME}, I'm interested in "${product.name}" (${product.price}). Is it available?`);
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 rounded-[2.5rem] mb-12 group shadow-2xl">
      <div className="flex h-[400px] md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
               <SmartImage 
                 src={products[currentIndex].image} 
                 alt={products[currentIndex].name}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:hidden"></div>
            </div>
            
            <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center text-white relative bg-slate-900">
               <div className="mb-6 flex items-center gap-4">
                  <span className="px-4 py-1.5 bg-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Featured Collection
                  </span>
                  <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest">{products[currentIndex].category}</span>
               </div>
               
               <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-4 leading-tight">
                 {products[currentIndex].name}
               </h2>
               <p className="text-slate-400 font-medium mb-8 max-w-sm line-clamp-2">
                 Discover premium quality {products[currentIndex].category} items designed for modern lifestyle and durability.
               </p>
               
               <div className="flex items-center gap-8 mb-10">
                 <span className="text-3xl font-black text-indigo-400">{products[currentIndex].price}</span>
                 <div className="h-8 w-px bg-white/10"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Premium Choice</span>
               </div>

               <div className="flex gap-4">
                 <button 
                   onClick={(e) => handleWhatsApp(products[currentIndex], e)}
                   className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
                 >
                   Order Now
                 </button>
                 <button 
                    onClick={() => onViewDetails(products[currentIndex])}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border border-white/10"
                 >
                   Quick View
                 </button>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-12 right-8 md:right-16 flex gap-3 z-10">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 left-8 md:left-16 flex gap-2 z-10">
        {products.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all rounded-full ${i === currentIndex ? 'w-12 bg-indigo-500' : 'w-4 bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};


export const ProductCard = ({ product, onViewDetails, ...props }: { product: Product, onViewDetails: () => void, [key: string]: any }) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const text = encodeURIComponent(`Hi, I'm interested in "${product.name}" priced at ${product.price}. Is it available?`);
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <motion.div 
      {...props}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 transition-all hover:shadow-2xl hover:shadow-indigo-100/40 h-full flex flex-col group cursor-pointer"
      onClick={onViewDetails}
    >
      <div className="aspect-square relative overflow-hidden bg-slate-50">
        <SmartImage 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[12px] font-black text-indigo-600 shadow-xl shadow-black/5 border border-white/20">
            {product.price}
          </div>
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{product.category}</span>
        <h3 className="text-lg font-black text-slate-800 mb-6 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2 italic">{product.name}</h3>
        
        <div className="mt-auto space-y-3">
          <button 
            onClick={handleWhatsApp}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-100 group/btn"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy on WhatsApp
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
            className="w-full py-4 bg-slate-50 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group/details"
          >
            Quick Details
            <ChevronRight className="w-4 h-4 transition-transform group-hover/details:translate-x-2" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
