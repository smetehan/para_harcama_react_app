import React from "react";

const BasketItem = ({ item, product }) => {
  return (
    <>
      <li className="basketItem">
        {product.title} <span>x {item.amount}</span>
      </li>
      <style jsx>{`
        .basketItem {
          padding-bottom: 10px;
          font-size: 17px;
        }
        .basketItem span {
          color: #999;
        }
      `}</style>
    </>
  );
};

export default BasketItem;
