import Layout from "../../components/layout/layout";
import Product from "../../components/product/product";
import ProductReview from "../../components/product/productReviews";
import { BEAUTY } from "../../constants/constants";

const ProductDetail = () => {
  const { img, title, price } = BEAUTY;
  return (
    <Layout>
      <Product img={img} title={title} price={price} />
      <ProductReview />
      <span className='w-[90%] h-1 border-b mt-0 mx-auto border-b-lightGray' />
      <ProductReview />
    </Layout>
  );
};

export default ProductDetail;
