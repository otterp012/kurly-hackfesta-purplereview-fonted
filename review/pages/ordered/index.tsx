import Layout from "../../components/layout/layout";
import { BEAUTY } from "../../constants/constants";
import ProductCard from "../../components/product/productCard";
import Divider from "../../components/UI/divider";

const OrderedProducts = () => {
  return (
    <Layout>
      <ul className='w-full h-full flex flex-col'>
        <ProductCard
          title={BEAUTY.title}
          img={BEAUTY.img}
          price={BEAUTY.price}
        />
        <Divider />
        <ProductCard
          title={BEAUTY.title}
          img={BEAUTY.img}
          price={BEAUTY.price}
        />
        <Divider />
        <ProductCard
          title={BEAUTY.title}
          img={BEAUTY.img}
          price={BEAUTY.price}
        />
        <Divider />
        <ProductCard
          title={BEAUTY.title}
          img={BEAUTY.img}
          price={BEAUTY.price}
        />
        <Divider />
        <ProductCard
          title={BEAUTY.title}
          img={BEAUTY.img}
          price={BEAUTY.price}
        />
      </ul>
    </Layout>
  );
};

export default OrderedProducts;
