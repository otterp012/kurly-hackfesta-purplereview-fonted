import React, { useEffect, useState } from "react";
import RatingValue from "./ratingValue";
import type { getProductRatingCreatorProps } from "../../../reducer/reviewReducer";

type RatingProps = {
  question: string;
  onSaveProductRating: (rating: getProductRatingCreatorProps) => void;
};

const productRatingConstants: number[] = [1, 2, 3, 4, 5];

const ProductRatingForm: React.FC<RatingProps> = ({
  question,
  onSaveProductRating,
}) => {
  const ratingOnChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    onSaveProductRating(Number(e.target.value));
  };

  return (
    <>
      <div className='text-3xl font-semibold text-black'>{question}</div>
      <form className='daisy-rating mt-5 w-full flex justify-center daisy-rating-lg pb-10'>
        {productRatingConstants.map((value) => (
          <RatingValue
            key={`star-${value}`}
            onChangeHandler={ratingOnChangeHandler}
            num={value}
          />
        ))}
      </form>
    </>
  );
};

export default ProductRatingForm;
