import React from "react";

const ProductImage = ({ detailProduct, index }) => {
  for (let i = 0; i < 6; i++) {
    <img
      src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40c3c2d4-7449-43dc-9b44-e3ad58181da8/air-zoom-alphafly-next-flyknit-ekiden-road-racing-shoes-ZgldSQ.png"
      key={i}
    />;
  }
  return (
    <div>
        {detailProduct.imgDetails[index].imgs.map((item, key) => {
            return (
                <div key={key}>
                    <img src={item.img} />
                </div>
            )
        })}
    </div>
  );
};

export default ProductImage;
