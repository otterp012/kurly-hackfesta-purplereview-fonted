import type { GetStaticProps, InferGetStaticPropsType } from "next/types";
import type { Params, FetchedProductData } from "../../types/types";

import Layout from "../../components/layout/layout";
import Product from "../../components/product/product";
import ProductReview from "../../components/product/productReviews";

const ProductDetail = ({
  curProductData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { imgURL, name, price, discountPrice } = curProductData;
  return (
    <Layout>
      <Product
        img={imgURL}
        title={name}
        price={price}
        discountPrice={discountPrice}
      />
      <ProductReview />
      <span className='w-[90%] h-1 border-b mt-0 mx-auto border-b-lightGray' />
      <ProductReview />
    </Layout>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const data = await fetch(
    "https://practive-a11a9-default-rtdb.firebaseio.com/.json",
  );
  const productData = await data.json();
  const paths = productData.map(({ id }: FetchedProductData) => {
    return {
      params: {
        slug: id.toString(),
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
  const data = await fetch(
    "https://practive-a11a9-default-rtdb.firebaseio.com/.json",
  );
  const productData = await data.json();
  const curProductData = productData.find(
    ({ id }: FetchedProductData) => id.toString() === slug,
  );

  return {
    props: {
      curProductData,
    },
  };
};
