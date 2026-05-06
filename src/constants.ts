
import { Product } from './types';

export const SHOP_NAME = "Mallikarjuna Plastics";
export const LOCATION = "Macherla, Palnadu";
export const PHONE = "9000748263";
export const WHATSAPP = "919000748263"; // International format for WhatsApp link
export const ADDRESS = "Opposite Preetham Dresses, Macherla, Palnadu District, Andhra Pradesh 522426";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.5376!2d79.4348!3d16.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b0fc08eb55555%3A0xe5a3c0e3e3e3e3e3!2sMallikarjuna%20Plastics!5e0!3m2!1sen!2sin!4v1713888000000!5m2!1sen!2sin";

export const CATEGORIES = [
  { id: 'plastic', name: 'Plastic Items', icon: 'Package' },
  { id: 'toys', name: 'Children Toys', icon: 'Gamepad2' },
  { id: 'kitchen', name: 'Home & Kitchen Items', icon: 'UtensilsCrossed' },
  { id: 'gifts', name: 'Gift Items', icon: 'Gift' },
];

export const PRODUCTS: Product[] = [
  // Plastic Items
  { id: 1, category: 'plastic', name: 'Premium Water Bucket (25L)', price: '₹249', image: 'https://images.unsplash.com/photo-1542013976693-857628c4749e?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'plastic', name: 'Heavy Duty Storage Tub', price: '₹499', image: 'https://images.unsplash.com/photo-1549495361-9128527a0595?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'plastic', name: 'Cello Style Comfort Chair', price: '₹899', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'plastic', name: 'Compact Multipurpose Stool', price: '₹149', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800' },
  
  // Toys
  { id: 5, category: 'toys', name: 'Electronic Musical Ride-on', price: '₹1,299', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'toys', name: 'Kids Building Station', price: '₹799', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800' },
  { id: 7, category: 'toys', name: 'Activity Walker for Toddlers', price: '₹950', image: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&q=80&w=800' },
  
  // Kitchen
  { id: 8, category: 'kitchen', name: 'Vacuum Insulated Flask', price: '₹599', image: 'https://images.unsplash.com/photo-1602143328240-46e7c23ee391?auto=format&fit=crop&q=80&w=800' },
  { id: 9, category: 'kitchen', name: 'Modern Frying Pan Set', price: '₹1,199', image: 'https://images.unsplash.com/photo-1584946914183-511ad96.jpg?auto=format&fit=crop&q=80&w=800' },
  { id: 10, category: 'kitchen', name: 'Spilled-Proof Spice Rack', price: '₹349', image: 'https://images.unsplash.com/photo-1585233861502-094ec6010534?auto=format&fit=crop&q=80&w=800' },
  
  // Gifts
  { id: 11, category: 'gifts', name: 'Grand Elephant Showpiece', price: '₹2,499', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800' },
  { id: 12, category: 'gifts', name: 'Designer Glass Vase', price: '₹699', image: 'https://images.unsplash.com/photo-1581781870027-04212e231e96?auto=format&fit=crop&q=80&w=800' },
  { id: 13, category: 'gifts', name: 'Elegant Living Room Decor', price: '₹1,500', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800' },
];

export const SHOP_IMAGES = [
  "https://images.unsplash.com/photo-1549495361-9128527a0595?auto=format&fit=crop&q=80&w=1200", // Bright Store Interior
  "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200", // Plastic Chairs Display
  "https://images.unsplash.com/photo-1542013976693-857628c4749e?auto=format&fit=crop&q=80&w=1200", // Plastic Buckets/Tubs
  "https://images.unsplash.com/photo-1534452285072-c51ef115a1b9?auto=format&fit=crop&q=80&w=1200", // Kitchenware Display
];

export const SOCIAL_EMBEDS = {
  youtube: [
    { id: 'yt1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Shop Tour' }, // Placeholder
  ],
  instagram: [
    { id: 'insta1', url: 'https://www.instagram.com/p/C6G-mKxJ_qI/', title: 'New Arrivals' }, // Placeholder
  ],
  facebook: [
    { id: 'fb1', url: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fposts%2F10158741865411729', title: 'Customer Review' }, // Placeholder
  ]
};

export const ABOUT_TEXT = {
  intro: "At Mallikarjuna Plastics, we bring you high-quality household essentials and a wide range of gift items since 2010. Located in the heart of Macherla, we pride ourselves on being the one-stop shop for every home need.",
  experience: "14+ Years of Quality Service",
  vision: "To provide every household in Macherla with durable, affordable, and stylish plasticware and lifestyle products.",
  specialties: [
    "Durable Plastic Household Items",
    "Creative & Safe Children Toys",
    "Modern Home & Kitchenware",
    "Exquisite Gift Articles for All Occasions"
  ]
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Media', href: '#media' },
  { name: 'Contact', href: '#contact' },
];
