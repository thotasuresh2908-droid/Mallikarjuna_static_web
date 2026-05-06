import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, ChevronRight, ShoppingCart, Package, Gamepad2, UtensilsCrossed, Gift, Phone, MapPin, Mail, Menu, X, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP } from '../constants';

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
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
          loading="lazy"
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
