import React from 'react';
import {useParams} from 'react-router-dom';

const ProductDetail = () => {
  const {product, slug} = useParams();

  return <div>{product}, {slug} 상세</div>;
};

export default ProductDetail;
