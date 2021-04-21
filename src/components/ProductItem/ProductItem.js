import React from "react";
import Products from "../Products/Products";

import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div className='ProductItem'>
      <img src={props.src} className='ProductItem-image'></img>
      <div className='ProductItem-details'>
        <h3 className='ProductItem-title'>{props.title}</h3>
        <p className='ProductItem-price'>{props.price}</p>
        <p className='ProductItem-sale'>
          {props.sale ? `Giảm ${props.sale}` : null}
        </p>
      </div>
      <button className='ProductItem-btn'>Buy</button>
    </div>
  );
};

export default ProductItem;
