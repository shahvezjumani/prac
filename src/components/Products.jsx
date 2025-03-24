import React, { useState, useEffect } from "react";

const Products = () => {
  const [page, setPage] = useState(1);
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${page}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [page]);
  return (
    <>
      <div>Products</div>
      {
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt="" width={200} height={200} />
        </div>
      }
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="bg-red-400 px-2 py-1 m-3 rounded-md"
      >
        Next
      </button>
    </>
  );
};

export default Products;
