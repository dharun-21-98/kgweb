export interface Product {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  specs: {
    material: string;
    loadRating: string;
    temperature: string;
    precision: string;
  };
  category: string;
}

export interface ClientLogo {
  id: number;
  name: string;
  logo: string;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  type: 'contact' | 'brochure' | 'quote';
  productId?: number;
}
