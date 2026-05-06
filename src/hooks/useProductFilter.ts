import { useState, useMemo, useCallback } from 'react';
import { Product, CategoryId } from '../types';

export const useProductFilter = (initialCategory: CategoryId, products: Product[]) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>(initialCategory);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory, products]);

  const displayedProducts = useMemo(() => {
    if (showAllProducts) return filteredProducts;
    return filteredProducts.slice(0, 8);
  }, [filteredProducts, showAllProducts]);

  const handleCategoryChange = useCallback((id: CategoryId) => {
    setActiveCategory(id);
    setShowAllProducts(false); // Reset view when changing category
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowAllProducts(prev => !prev);
  }, []);

  return {
    activeCategory,
    displayedProducts,
    showAllProducts,
    handleCategoryChange,
    toggleShowAll,
    totalFiltered: filteredProducts.length
  };
};
