import React, { useState } from "react";

const App = () => {
  let data = {
    title: "Google Pixel",
    details: "a new generated phone. It's a good and awesome phone.",
    price: "1099.69",
    img: "./pixel.webp",
  };

  let [show, setShow] = useState(false);
  let [items, setItems] = useState([]);

  // =============================================
  let [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prevCount) => ++prevCount);
  };
  let handleDecrease = () => {
    if (count > 0) {
      setCount((prevCount) => --prevCount);
    }
  };
  // =======================================

  const handleAddToCartBtn = () => {
    if (count === 0) return;
    setItems((prevItem) => [
      ...prevItem,
      {
        ...data,
        quantity: count,
      },
    ]);
    setCount(0);
    setShow(true);
  };

  const calculateTotalPrice = () => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
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
          {/* ======================================= */}
          <div className="flex mt-3 mb-3">
            <button
              onClick={handleDecrease}
              className="text-[20px] font-bold border border-black px-3"
            >
              -
            </button>
            <p className="text-[20px] font-semibold border  border-y-black px-6">
              {count}
            </p>
            <button
              onClick={handleIncrease}
              className="text-[20px] font-bold border border-black px-3"
            >
              +
            </button>
          </div>
          {/* ================================================== */}
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
          <div className="flex justify-between text-[18px] font-semibold my-3">
            <p>Item name</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          <div className="w-full h-[2px] bg-white"></div>
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between my-2">
                <p>{item.title}</p>
                <p>{item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="bg-white w-full h-[1px]"></div>
            </div>
          ))}
          <div className="flex justify-between">
            <p className="font-bold text-[20px]">Total Price:</p>
            <p className="font-bold text-[20px]">${calculateTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
