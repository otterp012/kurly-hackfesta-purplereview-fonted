import Layout from "../../components/layout/layout";
import { useCallback, useReducer, useState } from "react";
import { BEAUTY } from "../../constants/constants";
import ProductRatingForm from "../../components/form/productRatingForm/index";
import DeliveryRatingForm from "../../components/form/deliveryRatingForm";
import DetailReviewForm from "../../components/form/detailReviewForm";
import {
  initialReviewState,
  reviewReducer,
  reviewActions,
} from "../../reducer/reviewReducer";
import type {
  getProductRatingCreatorProps,
  getDeliveryRatingCreatorProps,
} from "../../reducer/reviewReducer";
import ProductCard from "../../components/product/productCard";
import Divider from "../../components/UI/divider";
const Review = () => {
  const [detailReviewIsSelected, setDetailReviewIsSelected] = useState(false);
  const [_, dispatchReview] = useReducer(reviewReducer, initialReviewState);
  const { getProductRatingCreator, getDeliveryRatingCreator } = reviewActions;

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

  return (
    <Layout>
      <div>
        <ProductCard
          title={BEAUTY.title}
          img={BEAUTY.img}
          price={BEAUTY.price}
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
            <DetailReviewForm />
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
