export interface User {
  email: string;
  password: string;
}

export interface Product {
  uid: string;
  brand: string;
  name: string;
  description: string;
  cost: number;
  lastcost: number;
  rating: number;
  rating_amount: number;
  delivery_date: string;
  articul: number;
  compound: string;
  more_info: { [key: string]: string };
  common_info: { [key: string]: string };
  profile: { [key: string]: string };
  reviews?: { user: string; date: number; review: string }[];
  questions?: { user: string; date: number; review: string }[];
  images: string[];
}
