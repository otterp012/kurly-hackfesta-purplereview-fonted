import type { GetStaticProps, InferGetStaticPropsType } from "next/types";
import type { FetchedProductData } from "../../types/types";

import Layout from "../../components/layout/layout";
import ProductCard from "../../components/product/productCard";
import Divider from "../../components/UI/divider";
import React from "react";

const OrderedProducts = ({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <ul className='w-full h-full flex flex-col'>
        {productData.map((singleProduct: FetchedProductData) => (
          <React.Fragment key={singleProduct.name}>
            <Divider />
            <ProductCard
              title={singleProduct.name}
              imgUrl={singleProduct.imgURL}
              price={singleProduct.price}
              discountPrice={singleProduct.discountPrice}
              slug={singleProduct.itemId.toString()}
            />
          </React.Fragment>
        ))}
      </ul>
    </Layout>
  );
};

export default OrderedProducts;

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    "http://ec2-13-124-42-109.ap-northeast-2.compute.amazonaws.com:80/orderlist",
  );
  const productData = await data.json();
  const { itemlist } = productData;

  return {
    props: {
      productData: itemlist,
    },
  };
};
