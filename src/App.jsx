import React, { useState } from "react";
import Quantity from "./component/quantity";

const App = () => {
  let data = {
    title: "Google Pixel",
    details: "a new generated phone. It's a good and awesome phone.",
    price: "1099.69",
    img: "./pixel.webp",
  };

  let [show, setShow] = useState(false);
  let [items, setItems] = useState([]);

  const handleAddToCartBtn = () => {
    setItems((prevItem) => [...prevItem, data]);
    setShow(true);
  };
  const handleColseCart = () => {
    setShow(false);
  };
  return (
    <div className="container m-auto bg-slate-200 p-5">
      <div className="flex gap-5 mb-3">
        <img src={data.img} alt="phone" className="border border-black" />
        <div>
          <h2>{data.title}</h2>
          <p>{data.details}</p>
          <h3>${data.price}</h3>
          <Quantity />
          <button onClick={handleAddToCartBtn} className="border border-black">
            Add to Cart
          </button>
        </div>
      </div>
      {show && (
        <div className="bg-black text-white p-5">
          <h2>Your Cart</h2>
          <button onClick={handleColseCart} className="border">
            X
          </button>
          {items.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
