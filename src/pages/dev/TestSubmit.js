import axios from 'axios';
import React, { useState } from 'react';

const TestSubmit = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const aChangeHandler = (e) => {
    setA(e.target.value);
  };

  const bChangeHandler = (e) => {
    setB(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    axios.get('https://dummyjson.com/products').then((response) => {
      console.log(response.data.products);

      if (response.data.products.length) {
        e.target.a.value = 'x';
        e.target.b.value = 'y';

        e.target.submit();
      }
    });
  };

  return (
    <form
      action="https://api.rainbowkh.net/api/form-test"
      method="post"
      encType="multipart/form-data"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        name="a"
        className="border border-gray-900"
        value={a}
        onChange={aChangeHandler}
      />
      <input
        type="hidden"
        name="b"
        className="border border-gray-900"
        value={b}
        onChange={bChangeHandler}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default TestSubmit;
