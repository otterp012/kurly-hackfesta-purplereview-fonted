import React, { useState } from "react";
import TextForm from "../textForm";
import Question from "./question";

const DetailReviewForm = () => {
  const [c, setc] = useState({});
  const [text, setText] = useState("");
  const textFormOnChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLTextAreaElement)) return;
    setText(e.target.value.trim());
  };

  return (
    <>
      <form className='space-y-3 w-full text-black'>
        <Question
          question='피부타입은 ?'
          answers={["지성", "건성", "복합성"]}
        />
        <div className='w-[90%] h-5 border-b mt-5 mb-5 mx-auto border-b-gray' />
        <Question question='피부타입은 ?' answers={["1", "2", "3"]} />
        <div className='w-[90%] h-5 border-b mt-5 mb-5 mx-auto border-b-gray' />
      </form>
      <TextForm
        onChangeHandler={textFormOnChangeHandler}
        place='detailReview'
      />
    </>
  );
};

export default DetailReviewForm;
