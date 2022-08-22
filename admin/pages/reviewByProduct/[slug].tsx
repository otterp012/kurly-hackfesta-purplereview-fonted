import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import LineChart from "../../components/chart/LineChart";
import BigLogo from "../../components/layout/BigLogo";
import Layout from "../../components/layout/layout";
import Rating from "../../components/rating";
import ReviewByQuestion from "../../components/reviewByQuestion";
import Select from "../../components/UI/select";
import type { Params, FetchedProductData } from "../../types/types";
const ReviewByProduct = ({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(productData);
  return (
    <Layout data={productData}>
      <div className='w-[50%] min-h-full bg-lightGray'>
        <div className='h-[20%] px-5 flex items-center justify-around'>
          <Rating title='제품만족도' rating='4.5 /5.0' />
          <Rating title='배송만족도' rating='95%' />
        </div>
        {/* 왼쪽하단 */}
        <div className='h-[60%]'>
          <LineChart />
        </div>
      </div>
      <div className='w-[50%] min-h-full'>
        <ReviewByQuestion />
        <ReviewByQuestion />
      </div>
    </Layout>
  );
};

export default ReviewByProduct;

export const getStaticPaths = async () => {
  const data = await fetch(
    "https://practive-a11a9-default-rtdb.firebaseio.com/.json",
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
  const data = await fetch(
    "https://practive-a11a9-default-rtdb.firebaseio.com/.json",
  );
  const productData = await data.json();
  const { itemlist } = productData;
  const curData = itemlist.find(
    ({ itemId }: FetchedProductData) => itemId.toString() === slug,
  );

  console.log(curData);
  return {
    props: {
      productData: curData,
    },
  };
};
