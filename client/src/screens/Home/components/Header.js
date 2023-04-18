import React, { useEffect, useState } from "react";

const Header = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let myDate = new Date();
    let hrs = myDate.getHours();

    if (hrs < 12) setMessage("Good Morning");
    else if (hrs >= 12 && hrs <= 17) setMessage("Good Afternoon");
    else if (hrs >= 17 && hrs <= 24) setMessage("Good Evening");
  }, []);

  return (
    <div className="text-lg font-medium text-gray-500">
      {message}, Priyanshu Bhardwaj!
    </div>
  );
};

export default Header;
