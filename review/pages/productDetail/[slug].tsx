import type { GetStaticProps, InferGetStaticPropsType } from "next/types";
import type { Params, FetchedProductData } from "../../types/types";

import Layout from "../../components/layout/layout";
import Product from "../../components/product/product";
import ProductReview from "../../components/product/productReviews";
import React from "react";

type ReviewDataProps = {
  asking: string;
  answerlist: string[];
  ratiolist: string[];
};

const ProductDetail = ({
  productData,
  reviewData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { imgURL, name, price, discountPrice } = productData;

  return (
    <Layout>
      <Product
        img={imgURL}
        title={name}
        price={price}
        discountPrice={discountPrice}
      />
      {reviewData.map((data: ReviewDataProps) => (
        <React.Fragment key={data.asking}>
          <span className='w-[90%] h-1 border-b mt-0 mx-auto border-b-lightGray' />
          <ProductReview
            question={data.asking}
            answerlist={data.answerlist}
            answerRatio={data.ratiolist}
          />
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const data = await fetch(
    "http://ec2-13-124-42-109.ap-northeast-2.compute.amazonaws.com:80/orderlist",
  );
  const productData = await data.json();
  const { itemlist } = productData;
  const paths = itemlist.map(({ itemId }: FetchedProductData) => {
    return {
      params: {
        slug: itemId.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const reviewResponse = await fetch(
    `http://ec2-13-124-42-109.ap-northeast-2.compute.amazonaws.com:80/items/${slug}`,
  );
  const productResponse = await fetch(
    "http://ec2-13-124-42-109.ap-northeast-2.compute.amazonaws.com:80/orderlist",
  );

  const reviewData = await reviewResponse.json();
  const productsData = await productResponse.json();
  const { itemlist } = productsData;
  const productData = itemlist.find(
    (data: FetchedProductData) => data.itemId.toString() === slug,
  );
  console.log(reviewResponse, reviewData);
  return {
    props: {
      reviewData,
      productData,
    },
  };
};
