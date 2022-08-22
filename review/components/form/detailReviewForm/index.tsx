import React, { useEffect, useState } from "react";
import { getDeliveryRatingCreatorProps } from "../../../reducer/reviewReducer";
import TextForm from "../textForm";
import Question from "./question";

type DetailReviewFormProps = {
  answerlist: string[];
  asking: string;
  questionId: number;
};

type KeywordReviewObj = {
  questionId: number;
  value: string;
};

export type ReviewResult = {
  keywordReviews: KeywordReviewObj[];
  itemContent: string;
};
const DetailReviewForm = ({
  questions,
  onSaveDetailReview,
}: {
  questions: DetailReviewFormProps[];
  onSaveDetailReview: (result: ReviewResult) => void;
}) => {
  const [keywordReviews, setKeywordReviews] = useState<KeywordReviewObj[]>([]);
  const [text, setText] = useState("");
  const textFormOnChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLTextAreaElement)) return;
    setText(e.target.value.trim());
  };

  const onSaveAnswerByQuestion = (questionId: number, value: string) => {
    let isAlreadySelected = keywordReviews.findIndex(
      (v) => v.questionId === questionId,
    );

    setKeywordReviews((prev) => {
      if (isAlreadySelected === -1) {
        return [...prev, { questionId, value }];
      } else {
        const tmp = prev.splice(isAlreadySelected, 1);
        return [
          ...prev,
          {
            questionId,
            value,
          },
        ];
      }
    });
  };

  useEffect(() => {
    const newState = {
      keywordReviews,
      itemContent: text,
    };
    onSaveDetailReview(newState);
  }, [keywordReviews, text]);
  return (
    <>
      <form className='space-y-3 w-full text-black'>
        {questions.map((question) => (
          <React.Fragment key={question.questionId}>
            <Question
              question={question.asking}
              answers={question.answerlist}
              questionId={question.questionId}
              onSaveAnswerByQuestion={onSaveAnswerByQuestion}
            />
            <div className='w-[90%] h-5 border-b mt-5 mb-5 mx-auto border-b-gray' />
          </React.Fragment>
        ))}
      </form>
      <TextForm
        onChangeHandler={textFormOnChangeHandler}
        place='detailReview'
      />
    </>
  );
};

export default DetailReviewForm;
