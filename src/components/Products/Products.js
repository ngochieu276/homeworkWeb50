import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./Products.css";

const Products = () => {
  return (
    <div className='Products'>
      <ProductItem
        title='Áo phông nữ cổ tròn'
        price='129.000'
        sale='12%'
        src='https://admin.vuahanghieu.com/upload/product/2020/03/ao-so-mi-burberry-short-sleeve-vintage-check-shirt-5e6f66dc30679-16032020184532.jpg'
      />
      <ProductItem
        title='Áo phông nữ cổ tim'
        price='199.000'
        src='https://product.hstatic.net/1000331486/product/lyos_den_2_22b7fe4813ec4333acd95f9a617698d0_master.jpg'
      />
      <ProductItem
        title='Áo phông nữ cổ lửng'
        price='159.000'
        sale='12%'
        src='https://dosi-in.com/images/detailed/75/dosiin-godson-zeus-vs-hades-shirt-7566775667.jpg'
      />
    </div>
  );
};

export default Products;
