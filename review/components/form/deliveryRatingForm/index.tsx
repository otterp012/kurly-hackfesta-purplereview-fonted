import React, { useEffect, useState } from "react";
import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/outline";
import TextForm from "../textForm";
import type { getDeliveryRatingCreatorProps } from "../../../reducer/reviewReducer";

type DeliveryRatingFromProps = {
  onSaveDeliveryRating: (rating: getDeliveryRatingCreatorProps) => void;
};

const DeliveryRatingForm: React.FC<DeliveryRatingFromProps> = ({
  onSaveDeliveryRating,
}) => {
  const [isSatisfied, setIsSatisfied] = useState(true);
  const [text, setText] = useState("");

  const onChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const selectedRating = e.target.value === "true" ? true : false;
    if (selectedRating) setText("");
    setIsSatisfied(selectedRating);
  };

  const textFormOnChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLTextAreaElement)) return;
    setText(e.target.value.trim());
  };

  useEffect(() => {
    onSaveDeliveryRating({
      isSatisfied,
      dissatisfiedText: text,
    });
  }, [isSatisfied, text, onSaveDeliveryRating]);

  return (
    <>
      <div className='text-3xl font-semibold text-black'>
        배송은 어떠셨어요?
      </div>
      <form className='flex flex-col'>
        <div className='flex mx-auto mt-5'>
          <label htmlFor='delivery-satisfaction'>
            <ThumbUpIcon
              className={`w-12 mr-12 ${
                isSatisfied && "fill-main"
              }  stroke-black`}
            />
          </label>
          <input
            type='radio'
            id='delivery-satisfaction'
            className='hidden'
            value='true'
            checked={isSatisfied}
            onChange={onChangeHandler}
          />
          <label htmlFor='delivery-dissatisfaction'>
            <ThumbDownIcon
              className={`w-12 ${!isSatisfied && "fill-main"} stroke-black`}
            />
          </label>
          <input
            type='radio'
            id='delivery-dissatisfaction'
            className='hidden'
            value='false'
            checked={!isSatisfied}
            onChange={onChangeHandler}
          />
        </div>

        {!isSatisfied && (
          <TextForm
            onChangeHandler={textFormOnChangeHandler}
            place='deliveryRating'
          />
        )}
      </form>
    </>
  );
};

export default DeliveryRatingForm;
