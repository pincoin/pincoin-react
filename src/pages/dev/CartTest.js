import React from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';
import { useFetchCategoriesQuery } from '../../store/apis/categoriesApi';
import IconButton from '../../ui/buttons/IconButton';

const CartTest = () => {
  const { data, error, isLoading } = useFetchCategoriesQuery();

  console.log(data, error, isLoading);

  return (
    <div>
      <IconButton className="text-2xl">
        <MdAdd />
      </IconButton>
      <IconButton className="text-2xl">
        <MdRemove />
      </IconButton>
    </div>
  );
};

export default CartTest;
