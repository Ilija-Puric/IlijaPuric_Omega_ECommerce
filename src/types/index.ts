export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountedPercentage: number;
  rating: number;
  stock: number;
  brand: number;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface ProductSchema {
  allProducts: Product[] | null;
  product: Product | null;
  totalElements: number;
  totalPages: number;
  loading: boolean;
  errorMessage: string | null;
  currentPage: number;
}

export interface ProductsPayload {
  payload: {
    limit: number;
    skip: number;
    total: number;
    select: string;
    products: Product[];
  };
}

export type User = {
  id: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  image?: string;
  token?: string;
};

export type Account = { name: string; password: string };

export interface UserSchema {
  currentLoggedUser: null | User;
  loading: boolean;
  errorMessage: null | string;
  userRegistered: boolean;
}

export type WrapperProps = {
  children: JSX.Element[] | JSX.Element;
};

export interface Message {
  payload: {
    messageType: string;
    message: string;
  };
  error: {
    messageType: string;
    message: string;
  };
}

export type Gender = 'male' | 'female';
export type Error = {
  payload: {
    error: string;
  };
};

export interface ProductParams {
  limit?: number;
  skip?: number;
  total?: number;
  select?: string;
  q?: string;
}
