import React, { useState } from "react";

const quantity = () => {
  let [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prevCount) => ++prevCount);
  };
  let handleDecrease=()=>{
    if(count>0){
      setCount((prevCount)=>--prevCount)  
    }
    
  }
  return (
    <div className="flex mt-3 mb-3">
      <button onClick={handleDecrease} className="text-[20px] font-bold border border-black px-3">-</button>
      <p className="text-[20px] font-semibold border  border-y-black px-6">{count}</p>
      <button onClick={handleIncrease} className="text-[20px] font-bold border border-black px-3">
        +
      </button>
    </div>
  );
};

export default quantity;
