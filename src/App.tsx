import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ExternalLink, ArrowRight, Play, Heart, Star, MapPin, Clock, Youtube, Instagram, Facebook, X, ShoppingCart } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Section, SectionHeader, ProductCard, Icon } from './components/ui-components';
import { SHOP_NAME, LOCATION, PHONE, WHATSAPP, CATEGORIES, PRODUCTS, SOCIAL_EMBEDS, ABOUT_TEXT, GOOGLE_MAPS_LINK, SHOP_IMAGES, ADDRESS } from './constants';

import { useProductFilter } from './hooks/useProductFilter';
import { CategoryId, Product } from './types';

export default function App() {
  const {
    activeCategory,
    displayedProducts,
    showAllProducts,
    handleCategoryChange,
    toggleShowAll
  } = useProductFilter('all', PRODUCTS);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleWhatsAppInquiry = (product: Product) => {
    const text = encodeURIComponent(`Hi ${SHOP_NAME}, I'm interested in "${product.name}" (${product.price}). Can you share more details?`);
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-12">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Hero Card */}
          <section id="home" className="lg:col-span-2 lg:row-span-1 bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col justify-center relative overflow-hidden group min-h-[400px]">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl transition-transform group-hover:scale-110"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10"
            >
              <span className="inline-block px-3 py-1 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Established 2010 • {LOCATION}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-none">
                Modern Home & <br/><span className="text-indigo-600">{SHOP_NAME}</span>
              </h1>
              <p className="text-slate-500 font-medium leading-relaxed max-w-md mb-8">
                Your one-stop destination for premium household plastics, creative toys, and kitchenware in Macherla.
              </p>
              <div className="flex gap-4">
                <a href="#products" className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all flex items-center gap-2 group/btn">
                  Explore Products
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </section>

          {/* Shop Gallery / Images Section */}
          <section id="gallery" className="lg:col-span-2 lg:row-span-1 grid grid-cols-2 gap-4">
            {SHOP_IMAGES.map((img, i) => (
              <div key={i} className="relative rounded-[20px] md:rounded-[2rem] overflow-hidden group border border-slate-200 shadow-sm aspect-square">
                <img 
                  src={img} 
                  alt={`Shop View ${i+1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            ))}
          </section>

          {/* Social / Media Feed (Tall Column) */}
          <section id="media" className="lg:col-span-1 lg:row-span-2 bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col group min-h-[500px]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black tracking-tight">Active Pulse</h3>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
              </div>
            </div>
            
            <div className="space-y-6 flex-grow">
              {/* Instagram Video Placeholder */}
              <div className="bg-white/5 rounded-3xl p-5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group/vid">
                <div className="aspect-[9/16] bg-slate-800 rounded-2xl mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover/vid:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover opacity-60" 
                    alt="Video thumbnail"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Instagram Reel</span>
                </div>
                <p className="text-sm font-bold leading-snug">Watch our latest toy arrivals in action!</p>
              </div>

              {/* Latest Update */}
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <p className="text-xs font-medium text-slate-300">
                  New shipment of premium kitchenware just landed! Visit us today.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-around">
               <Youtube className="w-5 h-5 text-slate-500 hover:text-white transition-colors cursor-pointer" />
               <Instagram className="w-5 h-5 text-slate-500 hover:text-white transition-colors cursor-pointer" />
               <Facebook className="w-5 h-5 text-slate-500 hover:text-white transition-colors cursor-pointer" />
            </div>
          </section>

          {/* Categories Grid (Small Tiles) */}
          <div className="lg:col-span-3 lg:row-span-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div 
              className="bg-orange-50 rounded-[2rem] p-6 border border-orange-100 flex flex-col justify-between cursor-pointer hover:border-orange-300 transition-all group aspect-square md:aspect-auto"
              onClick={() => handleCategoryChange('toys')}
            >
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Icon name="Gamepad2" className="w-5 h-5" />
              </div>
              <h3 className="font-black text-orange-900">Toys</h3>
            </div>
            <div 
              className="bg-blue-50 rounded-[2rem] p-6 border border-blue-100 flex flex-col justify-between cursor-pointer hover:border-blue-300 transition-all group aspect-square md:aspect-auto"
              onClick={() => handleCategoryChange('kitchen')}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Icon name="UtensilsCrossed" className="w-5 h-5" />
              </div>
              <h3 className="font-black text-blue-900">Kitchen</h3>
            </div>
            <div 
              className="bg-emerald-50 rounded-[2rem] p-6 border border-emerald-100 flex flex-col justify-between cursor-pointer hover:border-emerald-300 transition-all group aspect-square md:aspect-auto"
              onClick={() => handleCategoryChange('plastic')}
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Icon name="Package" className="w-5 h-5" />
              </div>
              <h3 className="font-black text-emerald-900">Plastic</h3>
            </div>
            <div 
              className="bg-purple-50 rounded-[2rem] p-6 border border-purple-100 flex flex-col justify-between cursor-pointer hover:border-purple-300 transition-all group aspect-square md:aspect-auto"
              onClick={() => handleCategoryChange('gifts')}
            >
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Icon name="Gift" className="w-5 h-5" />
              </div>
              <h3 className="font-black text-purple-900">Gifts</h3>
            </div>
          </div>

          {/* FEEDBACK / MEDIA HIGHLIGHT SECTION (Polished) */}
          <section className="lg:col-span-3 lg:row-span-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* YouTube Player Card */}
            <div className="md:col-span-2 bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm flex flex-col group min-h-[320px]">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    <Youtube className="w-6 h-6 outline-none" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-800 tracking-tight leading-none">Shop Highlights</h3>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Our Latest Video</p>
                  </div>
                </div>
                <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">Live Feed</div>
              </div>
              <div className="flex-grow aspect-video bg-slate-900 rounded-[1.5rem] overflow-hidden relative shadow-2xl">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={SOCIAL_EMBEDS.youtube[0].url} 
                  title="YouTube Preview" 
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Instagram Reel Highlight Card */}
            <div className="md:col-span-1 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2rem] p-6 text-white flex flex-col group relative overflow-hidden shadow-xl shadow-indigo-200">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <h3 className="font-black tracking-tight">Daily Reel</h3>
                </div>
                <div className="flex-grow relative rounded-[1.2rem] overflow-hidden group/reel cursor-pointer shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/reel:scale-110 opacity-90"
                    alt="Latest Reel"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover/reel:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full py-4 bg-white text-indigo-700 rounded-2xl text-[10px] font-black uppercase tracking-widest text-center hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                  View on Instagram <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </section>

          {/* Products Wide Section */}
          <section id="products" className="lg:col-span-4 bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Our Collection</h3>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Quality plasticware & more</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(['all', 'plastic', 'toys', 'kitchen', 'gifts'] as CategoryId[]).map(id => (
                  <button 
                    key={id}
                    onClick={() => handleCategoryChange(id)}
                    className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                  >
                    {id === 'all' ? 'All Items' : id}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode='popLayout'>
                {displayedProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onViewDetails={() => setSelectedProduct(product)}
                  />
                ))}
              </AnimatePresence>
            </div>
            
            <div className="mt-12 flex justify-center">
              <button 
                onClick={toggleShowAll}
                className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-[0.2em] group"
              >
                {showAllProducts ? 'Show Less' : 'View Full Collection'} 
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${showAllProducts ? '-rotate-90' : ''}`} />
              </button>
            </div>
          </section>

          {/* About Section (Bottom Left) */}
          <section id="about" className="lg:col-span-2 lg:row-span-1 bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col justify-center text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0"></div>
            <div className="relative z-10">
              <div className="text-6xl font-black text-indigo-600 mb-2 tracking-tighter">14+</div>
              <div className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 mb-6">Years Experience</div>
              <h4 className="text-xl font-black text-slate-800 mb-4">Macherla's Most Trusted</h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm mx-auto">
                Providing durable household items and safe toys for families since 2010. Our commitment is quality and durability.
              </p>
            </div>
          </section>

          {/* Contact & Map (Bottom Right Grid) */}
          <section id="contact" className="lg:col-span-2 lg:row-span-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-indigo-600 rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center shadow-xl shadow-indigo-600/20 group">
              <span className="text-[10px] font-black bg-indigo-500 px-4 py-1 rounded-full mb-4 tracking-widest uppercase">Need Support?</span>
              <p className="text-base mb-6 font-bold leading-tight">Instant Help via <br/>WhatsApp or Call</p>
              <div className="flex gap-3">
                <a href={`tel:${PHONE}`} className="w-12 h-12 bg-white text-indigo-600 rounded-2xl flex items-center justify-center font-bold shadow-lg hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-bold shadow-lg hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="bg-slate-200 rounded-[2rem] border border-slate-300 relative overflow-hidden group">
              <iframe 
                src={GOOGLE_MAPS_LINK} 
                className="absolute inset-0 w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                style={{ border: 0 }} 
                loading="lazy" 
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8 pointer-events-none transition-opacity group-hover:opacity-0">
                <address className="not-italic">
                  <p className="text-white font-black text-lg leading-none mb-2">Our Macherla Hub</p>
                  <p className="text-white/60 text-[10px] font-black tracking-widest uppercase underline underline-offset-4 decoration-indigo-500">Tap to see map</p>
                </address>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 aspect-square bg-slate-50 relative overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {selectedProduct.category}
                  </span>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight italic mb-2 leading-tight">
                  {selectedProduct.name}
                </h2>
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-2xl font-black text-indigo-600">{selectedProduct.price}</span>
                   <span className="text-xs text-emerald-500 font-bold uppercase tracking-widest px-2 py-0.5 bg-emerald-50 rounded-md">In Stock</span>
                </div>

                <div className="space-y-6 mb-10 text-slate-600 font-medium leading-relaxed">
                  <p>Experience the finest quality with our {selectedProduct.name}. Designed for durability and styled to match your modern home needs.</p>
                  <ul className="grid grid-cols-2 gap-4">
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      Premium Material
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      Eco-Friendly
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      Easy to Clean
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      High Durability
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => handleWhatsAppInquiry(selectedProduct)}
                    className="flex-grow flex items-center justify-center gap-2 bg-emerald-500 text-white py-4 rounded-2xl font-black text-[12px] uppercase tracking-widest shadow-xl shadow-emerald-100 hover:bg-emerald-600 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    Order on WhatsApp
                  </button>
                  <button className="hidden sm:flex items-center justify-center bg-slate-100 text-slate-400 p-4 rounded-2xl transition-all hover:bg-slate-200">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp FAB */}
      <a 
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 bg-white text-slate-800 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap pointer-events-none border border-slate-100">
          Chat with us
        </span>
      </a>
    </div>
  );
}
