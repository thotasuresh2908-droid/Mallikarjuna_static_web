
import { Product } from './types';
import { ASSETS } from './assets';

export const SHOP_NAME = "Mallikarjuna Plastics";
export const LOCATION = "Macherla, Palnadu";
export const PHONE = "9985277348";
export const WHATSAPP = "919985277348"; // International format for WhatsApp link
export const ADDRESS = "Opposite Preetham Dresses, Macherla, Palnadu District, Andhra Pradesh 522426";
export const GOOGLE_MAPS_LINK = ASSETS.MAP_EMBED;

export const CATEGORIES = [
  { id: 'plastic', name: 'Plastic Items', icon: 'Package' },
  { id: 'toys', name: 'Children Toys', icon: 'Gamepad2' },
  { id: 'kitchen', name: 'Home & Kitchen Items', icon: 'UtensilsCrossed' },
  { id: 'gifts', name: 'Gift Items', icon: 'Gift' },
];

export const PRODUCTS: Product[] = [
  // Plastic Items
  { id: 1, category: 'plastic', name: 'Premium Water Bucket (25L)', price: '₹249', image: ASSETS.PRODUCTS.BUCKET },
  { id: 2, category: 'plastic', name: 'Heavy Duty Storage Tub', price: '₹499', image: ASSETS.PRODUCTS.STORAGE_TUB },
  { id: 3, category: 'plastic', name: 'Cello Style Comfort Chair', price: '₹899', image: ASSETS.PRODUCTS.CHAIR },
  { id: 4, category: 'plastic', name: 'Compact Multipurpose Stool', price: '₹149', image: ASSETS.PRODUCTS.STOOL },
  
  // Toys
  { id: 5, category: 'toys', name: 'Electronic Musical Ride-on', price: '₹1,299', image: ASSETS.PRODUCTS.MUSICAL_RIDE_ON },
  { id: 6, category: 'toys', name: 'Kids Building Station', price: '₹799', image: ASSETS.PRODUCTS.BUILDING_STATION },
  { id: 7, category: 'toys', name: 'Activity Walker for Toddlers', price: '₹950', image: ASSETS.PRODUCTS.WALKER },
  
  // Kitchen
  { id: 8, category: 'kitchen', name: 'Vacuum Insulated Flask', price: '₹599', image: ASSETS.PRODUCTS.FLASK },
  { id: 9, category: 'kitchen', name: 'Modern Frying Pan Set', price: '₹1,199', image: ASSETS.PRODUCTS.PAN_SET },
  { id: 10, category: 'kitchen', name: 'Spilled-Proof Spice Rack', price: '₹349', image: ASSETS.PRODUCTS.SPICE_RACK },
  
  // Gifts
  { id: 11, category: 'gifts', name: 'Grand Elephant Showpiece', price: '₹2,499', image: ASSETS.PRODUCTS.ELEPHANT_SHOWPIECE },
  { id: 12, category: 'gifts', name: 'Designer Glass Vase', price: '₹699', image: ASSETS.PRODUCTS.GLASS_VASE },
  { id: 13, category: 'gifts', name: 'Elegant Living Room Decor', price: '₹1,500', image: ASSETS.PRODUCTS.DECOR },
];

export const SHOP_IMAGES = ASSETS.GALLERY;

export const SOCIAL_EMBEDS = {
  youtube: [
    { id: 'yt1', url: ASSETS.VIDEOS.TOUR, title: 'Shop Tour' },
  ],
  instagram: [
    { id: 'insta1', url: ASSETS.INSTAGRAM_PROFILE, title: 'Follow us for latest updates & reels.' },
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
