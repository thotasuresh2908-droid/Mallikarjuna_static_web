
import { Facebook, Instagram, Youtube, Phone, MapPin, ShoppingBag, MessageCircle } from 'lucide-react';
import { SHOP_NAME, LOCATION, PHONE, ADDRESS, NAV_LINKS, WHATSAPP } from '../constants';
import { ASSETS } from '../assets';

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: ASSETS.INSTAGRAM_PROFILE },
    { icon: Youtube, href: 'https://youtube.com/@shiva_ganesh_ready_mades' }, // Assuming similar handle for YouTube
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 md:py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight">{SHOP_NAME}</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 font-medium text-sm">
              Your trusted partner for high-quality plasticware and household essentials in {LOCATION}.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-6">Shop</h4>
            <ul className="space-y-3">
              {['Plastic Items', 'Children Toys', 'Kitchen Items', 'Gift Items'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-tight">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-6">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-tight">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-6">Location</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 text-sm font-bold leading-tight">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-slate-400 text-sm font-bold hover:text-indigo-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>+91 {PHONE} (WhatsApp)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest leading-loose">
            © {new Date().getFullYear()} {SHOP_NAME} • ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-black tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
