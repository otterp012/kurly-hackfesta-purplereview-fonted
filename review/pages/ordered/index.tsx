import type { GetStaticProps, InferGetStaticPropsType } from "next/types";
import type { FetchedProductData } from "../../types/types";

import Layout from "../../components/layout/layout";
import ProductCard from "../../components/product/productCard";
import Divider from "../../components/UI/divider";

const OrderedProducts = ({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <ul className='w-full h-full flex flex-col'>
        {productData.map((singleProduct: FetchedProductData) => (
          <>
            <Divider />
            <ProductCard
              key={singleProduct.name}
              title={singleProduct.name}
              imgUrl={singleProduct.imgURL}
              price={singleProduct.price}
              discountPrice={singleProduct.discountPrice}
              slug={singleProduct.itemId.toString()}
            />
          </>
        ))}
      </ul>
    </Layout>
  );
};

export default OrderedProducts;

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    "https://practive-a11a9-default-rtdb.firebaseio.com/.json",
  );
  const productData = await data.json();
  const { itemlist } = productData;

  return {
    props: {
      productData: itemlist,
    },
  };
};
