import React from "react";
import ListCard from "./ListCard";

const ListView = ({ button1, button2, icon, data }) => {
  return (
    <div>
      {data?.slice(0, 5).map((item, index) => {
        return (
          <div className="flex items-center gap-10 border-b" key={index}>
            <ListCard item={item} button1={button1} button2={button2} icon={icon} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
