export type CategoryId = 'plastic' | 'toys' | 'kitchen' | 'gifts' | 'all';

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}

export interface Product {
  id: number;
  category: CategoryId;
  name: string;
  price: string;
  image: string;
}

export interface SocialEmbed {
  id: string;
  url: string;
}

export interface SiteConfig {
  shopName: string;
  location: string;
  phone: string;
  whatsapp: string;
  address: string;
  googleMapsLink: string;
  aboutText: string;
}
