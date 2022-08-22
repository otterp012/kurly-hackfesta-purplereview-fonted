import { useCallback, useEffect, useReducer, useState } from "react";
import type { Params, FetchedProductData } from "../../types/types";
import type { GetStaticProps, InferGetStaticPropsType } from "next/types";

import Layout from "../../components/layout/layout";
import ProductRatingForm from "../../components/form/productRatingForm/index";
import DeliveryRatingForm from "../../components/form/deliveryRatingForm";
import DetailReviewForm, {
  ReviewResult,
} from "../../components/form/detailReviewForm";
import ProductCard from "../../components/product/productCard";

import {
  initialReviewState,
  reviewReducer,
  reviewActions,
} from "../../reducer/reviewReducer";
import type {
  getProductRatingCreatorProps,
  getDeliveryRatingCreatorProps,
} from "../../reducer/reviewReducer";

const Review = ({
  curData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [detailReviewIsSelected, setDetailReviewIsSelected] = useState(false);
  const [review, dispatchReview] = useReducer(
    reviewReducer,
    initialReviewState,
  );
  const [detailReviewResult, setDetailReviewResult] = useState<ReviewResult>();
  useEffect(() => {
    console.log(review);
    console.log(detailReviewResult);
  }, [review, detailReviewResult]);
  const { getProductRatingCreator, getDeliveryRatingCreator } = reviewActions;
  const { imgURL, name, price, discountPrice, itemId, questionList } = curData;
  const onSaveProductRating = useCallback(
    (productRating: getProductRatingCreatorProps) =>
      dispatchReview(getProductRatingCreator(productRating)),
    [getProductRatingCreator],
  );

  const onSaveDeliveryRating = useCallback(
    (rating: getDeliveryRatingCreatorProps) =>
      dispatchReview(getDeliveryRatingCreator(rating)),
    [getDeliveryRatingCreator],
  );

  const onSaveDetailReview = (result: ReviewResult) => {
    setDetailReviewResult(result);
  };
  return (
    <Layout>
      <div>
        <ProductCard
          title={name}
          imgUrl={imgURL}
          price={price}
          discountPrice={discountPrice}
          slug={itemId.toString()}
        />
      </div>
      <div className='bg-[#f3f4f6] px-3 py-5 w-full flex flex-col'>
        <ProductRatingForm
          onSaveProductRating={onSaveProductRating}
          question='제품은 어떠셨어요 ?'
        />
        <DeliveryRatingForm onSaveDeliveryRating={onSaveDeliveryRating} />

        {detailReviewIsSelected && (
          <>
            <span className='w-[90%] h-1 border-b mt-8 mb-5 mx-auto border-b-gray' />
            <DetailReviewForm
              questions={questionList}
              onSaveDetailReview={onSaveDetailReview}
            />
          </>
        )}
      </div>

      <div className='flex flex-col items-center space-y-4 pt-5'>
        <button
          className='bg-main w-[60%] h-16 text-white rounded-lg'
          onClick={() => setDetailReviewIsSelected(!detailReviewIsSelected)}
        >
          {detailReviewIsSelected
            ? "상세한 후기 작성 그만하기"
            : "상세한 후기 작성하기"}
        </button>
        <button className='bg-main w-[60%] h-16 text-white rounded-lg'>
          제출하기
        </button>
      </div>
    </Layout>
  );
};

export default Review;

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

  return {
    props: {
      curData,
    },
  };
};
// export const getStaticPaths = async () => {
//   const data = await fetch(
//     "https://practive-a11a9-default-rtdb.firebaseio.com/.json",
//   );
//   const productData = await data.json();
//   const paths = productData.map(({ id }: FetchedProductData) => {
//     return {
//       params: {
//         slug: id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { slug } = context.params as Params;
//   const data = await fetch(
//     "https://practive-a11a9-default-rtdb.firebaseio.com/.json",
//   );
//   const productData = await data.json();
//   const curProductData = productData.find(
//     ({ id }: FetchedProductData) => id.toString() === slug,
//   );

//   return {
//     props: {
//       curProductData,
//     },
//   };
// };
