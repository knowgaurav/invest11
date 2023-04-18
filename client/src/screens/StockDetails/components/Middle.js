import React, { useState } from "react";

const types = ["1 Hour", "2 Hour", "4 Hour", "1 Day", "1 Week", "1 Month"];

const Middle = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex gap-3 border-t border-b py-3">
      {types.map((item, index) => {
        return (
          <button
            className={
              selected === index
                ? "border rounded-2xl py-1 px-3 text-xs bg-black text-white"
                : "border rounded-2xl py-1 px-3 text-xs"
            }
            key={index}
            onClick={() => setSelected(index)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Middle;
