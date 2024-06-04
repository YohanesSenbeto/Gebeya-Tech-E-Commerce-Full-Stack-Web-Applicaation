import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  product_id: number;
  product_name: string;
  description: string;
  category_id: number;
  image_url: string;
  price: string;
  stock: number;
  status: string;
  tags: string;
  created_at: string;
  updated_at: string;
}

interface SearchContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  return (
    <SearchContext.Provider value={{ products, setProducts }}>
      {children}
    </SearchContext.Provider>
  );
};
