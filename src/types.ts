export interface Product {
  id: string;
  name: string;
  category: string; // 'pig' | 'poultry' | 'heating' | 'vet'
  subCategory: string; // e.g. 'Máng ăn heo', 'Núm uống nước', 'Lồng gà', 'Máng ăn gà', 'Máng uống gà', etc.
  price: number; // in VND, 0 means 'Liên hệ' (Contact for price)
  image: string;
  description: string;
  specifications: { [key: string]: string };
  features: string[];
  inStock: boolean;
  code: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories?: string[];
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  productId: string;
  productName: string;
  quantity: number;
  notes: string;
}
