import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../component/productDetail/productDetails";

const DetailProductPage = () => {
  const { id } = useParams();
  return (
    <React.Fragment>
      <ProductDetail id={id} />
    </React.Fragment>
  );
};

export default DetailProductPage;
