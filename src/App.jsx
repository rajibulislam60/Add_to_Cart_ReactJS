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
      <div className="flex gap-[60px] items-center mb-3">
        <img src={data.img} alt="phone" className="border border-black" />
        <div>
          <h2 className="text-[40px] font-bold">{data.title}</h2>
          <h3 className="text-[24px] font-bold mt-2">${data.price}</h3>
          <p className="text-gray-500 mt-5">{data.details}</p>
          <Quantity />
          <button
            onClick={handleAddToCartBtn}
            className="text-[20px] font-medium hover:bg-teal-400 hover:text-white duration-[0.4s] bg-white px-3 py-1"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {show && (
        <div className="bg-black text-white p-5">
          <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-semibold">Your Products Cart</h2>
          <button onClick={handleColseCart} className="border px-2">
            X
          </button>
          </div>
          {items.map((item, index) => (
            <div key={index} className="flex justify-between ">
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
