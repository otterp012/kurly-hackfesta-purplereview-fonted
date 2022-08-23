import ReviewProgressBar from "./reviewProgressBar";

type ProductReviewProps = {
  question: string;
  answerlist: string[];
  answerRatio: string[];
};
const ProductReview: React.FC<ProductReviewProps> = ({
  question,
  answerlist,
  answerRatio,
}) => {
  let maxIdx = 0;
  let max = Number.MIN_SAFE_INTEGER;

  const parsedAnswerRatio = answerRatio.map((v: string) => Number(v).toFixed());
  for (let i = 0; i < parsedAnswerRatio.length; i++) {
    const currentRatio = Number(parsedAnswerRatio[i]);
    if (currentRatio > max) {
      max = currentRatio;
      maxIdx = i;
    }
  }

  return (
    <div className='flex flex-col pt-1 px-2'>
      <div className='flex flex-col h-[120px]'>
        <div className='flex justify-between items-end'>
          <span className='w-40 text-lg text-start font-bold text-black'>
            {question}
          </span>
          <span className='text-lg ml-5 text-primary font-bold'>
            {answerlist[maxIdx]} {parsedAnswerRatio[maxIdx]}%
          </span>
        </div>
        {answerlist.map((answer: string, i: number) => (
          <ReviewProgressBar
            key={answer}
            description={answer}
            ratio={parsedAnswerRatio[i]}
            isMax={i === maxIdx}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
