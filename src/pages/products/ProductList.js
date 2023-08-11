import React from 'react';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { product } = useParams();

  return <div>{product} 목록</div>;
};

export default ProductList;
