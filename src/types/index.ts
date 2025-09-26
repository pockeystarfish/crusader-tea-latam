export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  origin: string;
  strength: 'Mild' | 'Medium' | 'Strong';
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}