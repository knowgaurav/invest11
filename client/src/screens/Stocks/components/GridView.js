import React from "react";
import GridCard from "./GridCard";

// const data = [
//   {
//     name: "Bitcoin",
//     symbol: "BTC",
//     image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
//     price: "₹1,894,959.27",
//   },
//   {
//     name: "Ethereum",
//     symbol: "ETH",
//     image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
//     price: "₹1,894,959.27",
//   },
//   {
//     name: "Tether",
//     symbol: "USDT",
//     image: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
//     price: "₹1,894,959.27",
//   },
//   {
//     name: "BNB",
//     symbol: "BNB",
//     image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
//     price: "₹1,894,959.27",
//   },
//   {
//     name: "USD Coin",
//     symbol: "USDC",
//     image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
//     price: "₹1,894,959.27",
//   },
// ];

const GridView = ({data}) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((item) => {
        return <GridCard item={item} />;
      })}
    </div>
  );
};

export default GridView;
